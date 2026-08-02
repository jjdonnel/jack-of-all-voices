// Utility to stop audio when switching "pages"
function stopAllAudio() {
    const players = document.querySelectorAll('audio');
    players.forEach(player => {
        player.pause();
        player.currentTime = 0;
    });
}

// Close mobile / drawer navigation
function closeMenu() {
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) menuToggle.checked = false;

    const demoToggle = document.getElementById('demoToggle');
    if (demoToggle) demoToggle.checked = false;
}

// Listener for clicks outside the navigation menu
window.addEventListener('mousedown', function(e) {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.querySelector('.navbar');
    
    if (menuToggle && menuToggle.checked && navbar) {
        if (!navbar.contains(e.target)) {
            closeMenu();
        }
    }
});

// Close menu when clicking nav links
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Universal Audio Player Engine (Class & ID Compatible)
function initMainPlayer() {
    const playerWrappers = document.querySelectorAll('.audio-player-wrapper');

    // Multi-Card Layouts (Home, Commercial, Narration, Instructional)
    if (playerWrappers.length > 0) {
        playerWrappers.forEach(wrapper => {
            const audio = wrapper.querySelector('.audio-element');
            const playBtn = wrapper.querySelector('.master-play-btn');
            const progressContainer = wrapper.querySelector('.progress-container');
            const progressBar = wrapper.querySelector('.progress-bar');
            const timeCurrent = wrapper.querySelector('.time-current');
            const timeTotal = wrapper.querySelector('.time-total');

            if (!audio || !playBtn) return;

            const formatTime = (seconds) => {
                if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            };

            audio.onloadedmetadata = () => {
                if (timeTotal) timeTotal.textContent = formatTime(audio.duration);
            };

            playBtn.onclick = (e) => {
                e.stopPropagation();

                // Pause all other audio tracks currently playing
                document.querySelectorAll('audio').forEach(otherAudio => {
                    if (otherAudio !== audio) {
                        otherAudio.pause();
                        const otherWrapper = otherAudio.closest('.audio-player-wrapper');
                        if (otherWrapper) {
                            const btn = otherWrapper.querySelector('.master-play-btn');
                            if (btn) btn.textContent = '▶';
                        }
                    }
                });

                if (audio.paused) {
                    audio.play()
                        .then(() => { playBtn.textContent = '❚❚'; })
                        .catch(err => console.error("Playback error:", err));
                } else {
                    audio.pause();
                    playBtn.textContent = '▶';
                }
            };

            audio.ontimeupdate = () => {
                if (audio.duration) {
                    const percent = (audio.currentTime / audio.duration) * 100;
                    if (progressBar) progressBar.style.width = `${percent}%`;
                    if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);
                }
            };

            if (progressContainer) {
                progressContainer.onclick = (e) => {
                    const rect = progressContainer.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    if (audio.duration) {
                        audio.currentTime = (clickX / rect.width) * audio.duration;
                    }
                };
            }

            audio.onended = () => {
                playBtn.textContent = '▶';
                if (progressBar) progressBar.style.width = '0%';
                if (timeCurrent) timeCurrent.textContent = '0:00';
            };
        });
        return;
    }

    // Fallback for Single ID-Based Audio Players
    const audio = document.getElementById('main-audio');
    const playBtn = document.getElementById('master-play-pause');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const timeCurrent = document.getElementById('time-current');
    const timeTotal = document.getElementById('time-total');

    if (!audio || !playBtn) return;

    const formatTime = (seconds) => {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    playBtn.onclick = () => {
        if (audio.paused) {
            audio.play().catch(err => console.error(err));
            playBtn.textContent = '⏸';
        } else {
            audio.pause();
            playBtn.textContent = '▶';
        }
    };

    audio.ontimeupdate = () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            if (progressBar) progressBar.style.width = `${percent}%`;
            if (timeCurrent) timeCurrent.textContent = formatTime(audio.currentTime);
        }
    };

    audio.onloadedmetadata = () => {
        if (timeTotal) timeTotal.textContent = formatTime(audio.duration);
    };

    if (progressContainer) {
        progressContainer.onclick = (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            if (audio.duration) {
                audio.currentTime = (clickX / rect.width) * audio.duration;
            }
        };
    }
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

// Initial Page Load Initialization
document.addEventListener('DOMContentLoaded', () => {
    if (typeof displayHome === 'function') {
        displayHome();
    }
});

// Updates the center title in the navbar
function setNavTitle(title) {
    const navTitle = document.getElementById('nav-page-title');
    if (navTitle) {
        navTitle.textContent = title;
    }
}