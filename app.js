// Utility to stop audio when switching "pages"
function stopAllAudio() {
    const players = document.querySelectorAll('audio');
    players.forEach(player => {
        player.pause();
        player.currentTime = 0;
    });
}

// 1. Keep your function exactly as is
function closeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.checked = false;
    }

    const demoToggle = document.getElementById('demoToggle');
    if (demoToggle) {
        demoToggle.checked = false;
    }
}

// 2. Add the listener, but let it call the function above
window.addEventListener('mousedown', function(e) {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');
    
    // Only proceed if the menu is actually open
    if (menuToggle && menuToggle.checked) {
        
        // We check if the click target is NOT the navbar (the bar at the top)
        // and NOT a child of the navbar (like the hamburger or the links)
        if (!navbar.contains(e.target)) {
            console.log("Click detected outside! Closing menu...");
            closeMenu();
        }
    }
});

// You can add more global logic here as you grow