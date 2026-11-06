/* Native, progressively enhanced navigation and reading controls. */
(function () {
  'use strict';
  var root = document.documentElement;
  var themeButton = document.querySelector('.theme-toggle');
  var metaColor = document.getElementById('theme-color');
  var system = window.matchMedia('(prefers-color-scheme: dark)');
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function savedTheme() { try { return localStorage.getItem('sam-ren-theme'); } catch (_) { return null; } }
  function setTheme(theme) {
    root.dataset.theme = theme;
    var label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    if (themeButton) { themeButton.setAttribute('aria-label', label); themeButton.title = label; themeButton.setAttribute('aria-pressed', String(theme === 'dark')); }
    if (metaColor) metaColor.content = theme === 'dark' ? '#111722' : '#edf1f7';
  }
  setTheme(root.dataset.theme || (system.matches ? 'dark' : 'light'));
  if (themeButton) themeButton.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('sam-ren-theme', next); } catch (_) {}
    setTheme(next);
  });
  function followSystem() { var saved = savedTheme(); setTheme(saved === 'light' || saved === 'dark' ? saved : (system.matches ? 'dark' : 'light')); }
  system.addEventListener('change', function () { if (!savedTheme()) followSystem(); });
  window.addEventListener('storage', function (e) { if (e.key === 'sam-ren-theme' || e.key === null) followSystem(); });

  var mouseHover = window.matchMedia('(hover: hover) and (pointer: fine)');
  var reducedTransparency = window.matchMedia('(prefers-reduced-transparency: reduce)');
  var glassSurfaces = document.querySelectorAll(
    '.site-header, .home-masthead, .sheet-front, .explore-card, .site-footer, .blog-index-details, .blog-subscribe, ' +
    '.page-projects .content-section, .page-research .content-section:nth-of-type(-n+2)'
  );
  glassSurfaces.forEach(function (surface) {
    var frame = 0;
    var pointerX, pointerY;

    surface.classList.add('glass-tracked');
    surface.addEventListener('pointermove', function (event) {
      if (event.pointerType !== 'mouse' || !mouseHover.matches || motion.matches || reducedTransparency.matches) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(function () {
        frame = 0;
        var bounds = surface.getBoundingClientRect();
        surface.style.setProperty('--glass-x', (pointerX - bounds.left) + 'px');
        surface.style.setProperty('--glass-y', (pointerY - bounds.top) + 'px');
        surface.classList.add('is-lit');
      });
    }, {passive: true});

    function clearLight() {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      surface.classList.remove('is-lit');
    }
    surface.addEventListener('pointerleave', clearLight);
    surface.addEventListener('pointercancel', clearLight);
  });

  var subscriptionPreview = document.querySelector('[data-subscription-preview]');
  if (subscriptionPreview) subscriptionPreview.addEventListener('submit', function (event) {
    event.preventDefault();
    var note = subscriptionPreview.querySelector('.blog-subscribe-note');
    note.textContent = 'Preview complete. No email was sent.';
    subscriptionPreview.reset();
  });

  var menu = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');
  function closeMenu() {
    if (!menu || !nav) return;
    menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); nav.classList.remove('is-open');
  }
  if (menu && nav) {
    menu.addEventListener('click', function () {
      var open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('click', function (e) { if (!e.target.closest('.site-header')) closeMenu(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
    window.matchMedia('(min-width: 651px)').addEventListener('change', closeMenu);
  }
  var sectionNav = document.querySelector('.section-index');
  var sections = Array.prototype.slice.call(document.querySelectorAll('.content-section'));
  var navLinks = [];
  var blogIndex = document.querySelector('.blog-index');
  var blogHeadings = [];
  if (blogIndex && sectionNav) {
    var details = blogIndex.querySelector('details');
    var desktopIndex = window.matchMedia('(min-width: 801px)');
    var list = document.createElement('ul');
    blogHeadings = Array.from(document.querySelectorAll('.article-wrap :is(h2, h3, h4, h5, h6)[id]'));
    blogHeadings.forEach(function (heading) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      var language = heading.closest('[lang]');
      if (language) link.lang = language.lang;
      item.className = 'index-level-' + heading.tagName.charAt(1);
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = heading.textContent.trim();
      item.appendChild(link);
      list.appendChild(item);
      navLinks.push(link);
    });
    if (blogHeadings.length) {
      sectionNav.appendChild(list);
      details.open = desktopIndex.matches;
      blogIndex.hidden = false;
      desktopIndex.addEventListener('change', function (event) { details.open = event.matches; });
      sectionNav.addEventListener('click', function (event) {
        if (event.target.closest('a') && !desktopIndex.matches) details.open = false;
      });
    }
  } else if (sectionNav) {
    sections.forEach(function (section, i) {
      var heading = section.querySelector('h2');
      if (!heading || !heading.id) return;
      var a = document.createElement('a');
      a.href = '#' + heading.id; a.textContent = heading.textContent; a.dataset.index = String(i+1).padStart(2, '0');
      sectionNav.appendChild(a); navLinks.push(a);
    });
    if (!navLinks.length) document.querySelector('.page-index').hidden = true;
  }
  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('aria-labelledby');
        navLinks.forEach(function (a) {
          var active = a.getAttribute('href') === '#' + id;
          a.classList.toggle('is-active', active);
          if (active) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
        });
      });
    }, {rootMargin:'-100px 0px -50% 0px', threshold:0});
    if (!blogIndex) sections.forEach(function (section) { sectionObserver.observe(section); });
    if (!motion.matches) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.remove('reveal-pending'); entry.target.classList.add('reveal-visible'); revealObserver.unobserve(entry.target); }
        });
      }, {threshold:.04,rootMargin:'0px 0px 35px 0px'});
      document.querySelectorAll('.content-section, .explore-card').forEach(function (section) {
        if (section.getBoundingClientRect().top > innerHeight) { section.classList.add('reveal-pending'); revealObserver.observe(section); }
      });
      motion.addEventListener('change', function (e) {
        if (e.matches) { revealObserver.disconnect(); document.querySelectorAll('.reveal-pending').forEach(function (el) { el.classList.remove('reveal-pending'); }); }
      });
    }
  }
  var scrollFrame = 0;
  var activeBlogLink;
  function progress() {
    scrollFrame = 0;
    var max = root.scrollHeight - innerHeight;
    root.style.setProperty('--progress', max > 0 ? Math.max(0, Math.min(1, scrollY/max)) : 0);
    if (blogHeadings.length) {
      var activeIndex = blogHeadings.length - 1;
      while (activeIndex >= 0 && blogHeadings[activeIndex].getBoundingClientRect().top > 125) activeIndex--;
      var nextLink = navLinks[activeIndex];
      if (activeBlogLink !== nextLink) {
        if (activeBlogLink) activeBlogLink.removeAttribute('aria-current');
        if (nextLink) nextLink.setAttribute('aria-current', 'location');
        activeBlogLink = nextLink;
      }
    }
  }
  function scheduleProgress() { if (!scrollFrame) scrollFrame = requestAnimationFrame(progress); }
  window.addEventListener('scroll', scheduleProgress, {passive:true});
  window.addEventListener('resize', scheduleProgress, {passive:true});
  window.addEventListener('load', progress);
  progress();
}());
