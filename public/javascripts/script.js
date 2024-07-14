// JavaScript for sidebar toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const sidebarNav = document.querySelector('.sidebar-nav');
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
    
    menuButton.addEventListener('click', function() {
        sidebarNav.classList.toggle('open');
        document.body.appendChild(closeButton);
    });

    closeButton.addEventListener('click', function() {
        sidebarNav.classList.remove('open');
        closeButton.remove();
    });
});