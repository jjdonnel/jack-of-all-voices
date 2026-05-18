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

// This tells the menu to snap shut whenever a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menuToggle').checked = false;
    });
});

function initMainPlayer() {
    const audio = document.getElementById('main-audio');
    const playBtn = document.getElementById('master-play-pause');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const timeCurrent = document.getElementById('time-current');
    const timeTotal = document.getElementById('time-total');

    if (!audio) return;

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '⏸';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
        }
    });

    audio.addEventListener('timeupdate', () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percent}%`;
        
        // Update current time display
        let mins = Math.floor(audio.currentTime / 60);
        let secs = Math.floor(audio.currentTime % 60);
        timeCurrent.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    });

    audio.addEventListener('loadedmetadata', () => {
        let mins = Math.floor(audio.duration / 60);
        let secs = Math.floor(audio.duration % 60);
        timeTotal.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    });

    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        audio.currentTime = (clickX / width) * audio.duration;
    });
}

function createVideoPlayer(videoSrc, posterSrc, title) {
    return `
        <div class="video-player-wrapper fade-element show">
            <h2 class="video-section-title">${title}</h2>
            <div class="video-container">
                <video 
                    id="video-demo" 
                    controls 
                    poster="${posterSrc}" 
                    class="centered-video">
                    <source src="${videoSrc}" type="video/mp4">
                </video>
            </div>
        </div>
    `;
}


document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the Home HTML first
    displayHome(); 
});