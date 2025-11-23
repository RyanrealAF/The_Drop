// Expert Web Developer: Functionality for smooth, collapsible sections
function setupCollapsibleModules() {
    const toggles = document.querySelectorAll('.collapse-toggle');

    toggles.forEach(toggle => {
        // Find the target content element using the aria-controls attribute
        const targetId = toggle.getAttribute('aria-controls');
        const targetElement = document.getElementById(targetId);

        if (!targetElement) return; // Guard clause

        // Safety Checker: Simple, client-side interaction (No tracking)
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            
            // 1. Update Accessibility State
            toggle.setAttribute('aria-expanded', !isExpanded);

            // 2. Toggle Visibility using the 'hidden' attribute (Simple/Accessible)
            if (isExpanded) {
                targetElement.setAttribute('hidden', '');
                toggle.querySelector('.toggle-icon').textContent = '+';
            } else {
                targetElement.removeAttribute('hidden');
                toggle.querySelector('.toggle-icon').textContent = '×';
            }
        });

        // Ensure content starts hidden for accessibility
        targetElement.setAttribute('hidden', ''); 
    });
}

// Expert Web Developer: Simple script for mobile-friendly navigation and initialization
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    // Toggle mobile navigation visibility
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        
        // Toggle visibility for mobile navigation
        mainMenu.style.display = isExpanded ? 'none' : 'block';
    });

    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Initialize collapsible modules
    setupCollapsibleModules();
});