// Cursor Follower
document.addEventListener('DOMContentLoaded', () => {
    // Create cursor follower
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.appendChild(follower);

    // Update cursor follower position
    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX - 10 + 'px';
        follower.style.top = e.clientY - 10 + 'px';
    });

    // Animate welcome text
    const welcomeText = document.querySelector('.welcome-text');
    if (welcomeText) {
        const text = welcomeText.textContent;
        welcomeText.textContent = '';
        [...text].forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.setProperty('--char-index', i);
            welcomeText.appendChild(span);
        });
    }

    // Create floating math symbols
    const mathSymbols = ['∫', '∑', '∏', 'π', '∞', '√'];
    document.addEventListener('click', (e) => {
        const symbol = document.createElement('div');
        symbol.className = 'float-symbol';
        symbol.textContent = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
        symbol.style.left = e.clientX + 'px';
        symbol.style.top = e.clientY + 'px';
        document.body.appendChild(symbol);

        // Remove symbol after animation
        setTimeout(() => {
            symbol.remove();
        }, 3000);
    });

    // Add loading animation to math symbols
    const loadingMath = document.createElement('div');
    loadingMath.className = 'loading-math';
    loadingMath.textContent = '∑';
    document.body.appendChild(loadingMath);

    // Hide loading after 2 seconds
    setTimeout(() => {
        loadingMath.style.display = 'none';
    }, 2000);
}); 