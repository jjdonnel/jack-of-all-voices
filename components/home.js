function displayHome() {
    // 1. Collapse the menu immediately
    closeMenu();
    const main = document.getElementById('main');
    // Switch content back to the logo
    main.innerHTML = `
        <div class="logo-container fade-element show">
            <img src="images/JackOfAllVoices-logo.jpg" alt="Logo" class="centered-logo">
        </div>
    
        <div class="main-demo-reel">
            <h2>Featured Read: The Ironworks</h2>
            <div class="audio-player-wrapper">
                <audio id="main-audio" src="audio/Ironworks.mp3"></audio>
                
                <button id="master-play-pause" class="master-play-btn">▶</button>
                
                <div class="player-controls">
                    <div class="progress-container" id="progress-container">
                        <div class="progress-bar" id="progress-bar"></div>
                    </div>
                    <div class="time-stamps">
                        <span id="time-current">0:00</span>
                        <span id="time-total">0:00</span>
                    </div>
                </div>
            </div>
        </div>
         ${createVideoPlayer('https://res.cloudinary.com/jjdonnel/video/upload/v1779157758/secondEditedVideo_qncjsc.mp4', 'images/jack-studio.jpg', 'Jack in the Studio')}

    `;
    // 2. The Hybrid trigger to fade it in
    main.style.display = 'flex';
    setTimeout(() => {
        main.classList.add('show');
    }, 50);

    // Initialize the player logic after the HTML is injected
    initMainPlayer();

}