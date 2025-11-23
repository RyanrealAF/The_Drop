// Expert Web Developer: Simple script for mobile-friendly navigation
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    // Safety Checker: Simple DOM manipulation, no external libraries or analytics
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle visibility for mobile navigation
        mainMenu.style.display = isExpanded ? 'none' : 'block';
    });

    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});