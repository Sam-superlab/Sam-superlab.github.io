/* Keep each planet a normal link, with an optional interactive preview. */
(function () {
  'use strict';

  const map = document.querySelector('[data-star-map]');
  if (!map) return;

  const stage = map.querySelector('[data-star-stage]');
  const ship = map.querySelector('[data-star-ship]');
  const planets = Array.from(map.querySelectorAll('a[data-star-planet]'));
  const preview = map.querySelector('[data-star-preview]');
  const previewCopy = map.querySelector('[data-star-preview-copy]');
  const previewProfile = map.querySelector('[data-star-preview-profile]');
  const previewIndex = map.querySelector('[data-star-preview-index]');
  const previewTitle = map.querySelector('[data-star-preview-title]');
  const previewSummary = map.querySelector('[data-star-preview-summary]');
  const previewLink = map.querySelector('[data-star-preview-link]');
  const previewClose = map.querySelector('[data-star-preview-close]');
  const header = document.querySelector('.site-header');
  if (!stage || !planets.length || !preview || !previewCopy || !previewProfile ||
      !previewIndex || !previewTitle || !previewSummary || !previewLink) return;

  const mouseHover = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let selectedPlanet = null;
  let pendingTouch = null;
  let morph = null;
  let previewFades = [];

  function stopMorph() {
    if (morph) {
      morph.onfinish = null;
      morph.cancel();
      morph = null;
    }
    previewFades.forEach(function (fade) { fade.cancel(); });
    previewFades = [];
    preview.classList.remove('is-morphing');
  }

  function placePreview(origin) {
    const layer = preview.parentElement.getBoundingClientRect();
    const gap = 14;
    const topEdge = Math.max(gap, header ? header.getBoundingClientRect().bottom + gap : gap);
    const viewport = document.documentElement;
    preview.style.maxHeight = Math.max(120, viewport.clientHeight - topEdge - gap) + 'px';

    const width = preview.offsetWidth;
    const height = preview.offsetHeight;
    const centeredX = origin.left + (origin.width - width) / 2;
    const centeredY = origin.top + (origin.height - height) / 2;
    const x = Math.max(gap, Math.min(centeredX, viewport.clientWidth - gap - width));
    const y = Math.max(topEdge, Math.min(centeredY, viewport.clientHeight - gap - height));
    preview.style.left = x - layer.left + 'px';
    preview.style.top = y - layer.top + 'px';
  }

  function morphPreview(origin, accent) {
    const dock = preview.getBoundingClientRect();
    if (!origin.width || !origin.height || !dock.width || !dock.height) return;
    const x = origin.left + origin.width / 2 - dock.left - dock.width / 2;
    const y = origin.top + origin.height / 2 - dock.top - dock.height / 2;
    const style = window.getComputedStyle(preview);
    const duration = 420;

    preview.classList.add('is-morphing');
    morph = preview.animate([
      {
        transform: 'translate(' + x + 'px, ' + y + 'px) scale(' + origin.width / dock.width + ', ' + origin.height / dock.height + ')',
        transformOrigin: 'center',
        borderRadius: '50%',
        backgroundColor: accent || style.backgroundColor
      },
      {transform: 'none', transformOrigin: 'center', borderRadius: style.borderRadius, backgroundColor: style.backgroundColor}
    ], {duration: duration, easing: 'cubic-bezier(.22, .74, .3, 1)'});

    previewFades = Array.from(preview.children).filter(function (child) { return !child.hidden; }).map(function (child) {
      return child.animate([{opacity: 0}, {opacity: 1}], {delay: 135, duration: duration - 135, fill: 'both'});
    });
    morph.onfinish = stopMorph;
  }

  function selectPlanet(planet) {
    if (planet === selectedPlanet) return;
    stopMorph();
    const orb = planet.querySelector('.star-planet-orb');
    const origin = orb.getBoundingClientRect();
    if (selectedPlanet) selectedPlanet.classList.remove('is-selected');
    selectedPlanet = planet;
    planet.classList.add('is-selected');
    const isProfile = planet.hasAttribute('data-star-profile');
    previewCopy.hidden = isProfile;
    previewProfile.hidden = !isProfile;
    previewIndex.textContent = planet.dataset.starIndex;
    previewTitle.textContent = planet.dataset.starTitle;
    previewSummary.textContent = planet.dataset.starSummary;
    previewLink.setAttribute('href', planet.getAttribute('href'));
    previewLink.setAttribute('aria-label', 'Open page for ' + planet.dataset.starTitle);

    const accent = planet.dataset.starAccent || planet.style.getPropertyValue('--planet-accent');
    if (accent) map.style.setProperty('--preview-accent', accent);
    else map.style.removeProperty('--preview-accent');
    preview.hidden = false;
    placePreview(origin);
    if (!reducedMotion.matches && typeof preview.animate === 'function') morphPreview(origin, accent);
  }

  function closePreview() {
    if (!selectedPlanet) return;
    stopMorph();
    if (preview.contains(document.activeElement)) selectedPlanet.focus({preventScroll: true});
    selectedPlanet.classList.remove('is-selected');
    selectedPlanet = null;
    preview.hidden = true;
  }

  map.classList.add('is-interactive');

  planets.forEach(function (planet) {
    planet.addEventListener('pointerenter', function (event) {
      if (event.pointerType !== 'mouse' || !mouseHover.matches) return;
      selectPlanet(planet);
    });
    planet.addEventListener('focus', function () { selectPlanet(planet); });
    planet.addEventListener('pointerdown', function (event) {
      // Older browsers report touch-generated clicks as mouse events.
      pendingTouch = event.pointerType === 'touch' ? planet : null;
    });
    planet.addEventListener('click', function (event) {
      const touched = event.pointerType === 'touch' || (event.detail > 0 && pendingTouch === planet);
      pendingTouch = null;
      if (!touched || event.defaultPrevented || event.button !== 0 ||
          event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

      event.preventDefault();
      selectPlanet(planet);
    });
  });

  stage.addEventListener('pointercancel', function () { pendingTouch = null; });
  if (previewClose) previewClose.addEventListener('click', closePreview);
  stage.addEventListener('click', function (event) {
    if (!event.target.closest('[data-star-planet]')) closePreview();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closePreview();
  });
  window.addEventListener('resize', function () {
    if (!selectedPlanet) return;
    stopMorph();
    placePreview(selectedPlanet.querySelector('.star-planet-orb').getBoundingClientRect());
  });
  reducedMotion.addEventListener('change', stopMorph);
  if (!ship) return;

  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;
  let lastPoint = null;
  let heading = 0;

  function stopPiloting() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    lastPoint = null;
    stage.classList.remove('is-piloting');
  }

  stage.addEventListener('pointermove', function (event) {
    if (event.pointerType !== 'mouse' || !mouseHover.matches || reducedMotion.matches) return;
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (frame) return;

    frame = requestAnimationFrame(function () {
      frame = 0;
      const bounds = stage.getBoundingClientRect();
      const x = pointerX - bounds.left - stage.clientLeft;
      const y = pointerY - bounds.top - stage.clientTop;
      if (lastPoint) {
        const dx = x - lastPoint.x;
        const dy = y - lastPoint.y;
        if (dx * dx + dy * dy >= 1) {
          const angle = Math.atan2(dy, dx) * 180 / Math.PI + 90;
          // Cross the zero-degree boundary without making a full turn.
          heading += ((angle - heading + 180) % 360 + 360) % 360 - 180;
        }
      }
      lastPoint = {x: x, y: y};
      ship.style.setProperty('--ship-x', x + 'px');
      ship.style.setProperty('--ship-y', y + 'px');
      ship.style.setProperty('--ship-angle', heading + 'deg');
      stage.style.setProperty('--flight-x', x + 'px');
      stage.style.setProperty('--flight-y', y + 'px');
      stage.classList.add('is-piloting');
    });
  }, {passive: true});

  stage.addEventListener('pointerleave', stopPiloting);
  stage.addEventListener('pointercancel', stopPiloting);
  stage.addEventListener('pointerdown', function (event) {
    if (event.pointerType !== 'mouse') stopPiloting();
  });
  window.addEventListener('blur', stopPiloting);
  mouseHover.addEventListener('change', stopPiloting);
  reducedMotion.addEventListener('change', stopPiloting);
}());
