function displayInstructional() {
    // 1. Collapse menu and stop any active audio
    closeMenu();
    stopAllAudio();

    const main = document.getElementById('main');

    // 2. Prepare for transition
    main.classList.remove('show');
    main.style.display = 'none';

    // 3. Inject matching glass cards & custom player UI
    main.innerHTML = `
        <div class="section">
            <h1 class="page-title">Instructional Demos</h1>
            
            <!-- Sample 1 -->
            <div id="corporate-training" class="genre-card">
                <h3>Corporate Training</h3>
                <p class="demo-subtitle">Professional & Informative Delivery</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/4-6_Golf.mp3"></audio>
                    <button class="master-play-btn" aria-label="Play">▶</button>
                    <div class="player-controls">
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                        <div class="time-stamps">
                            <span class="time-current">0:00</span>
                            <span class="time-total">0:00</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sample 2 -->
            <div id="technical-demo" class="genre-card">
                <h3>Technical</h3>
                <p class="demo-subtitle">Unboxing and Assembly</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/assembly.mp3"></audio>
                    <button class="master-play-btn" aria-label="Play">▶</button>
                    <div class="player-controls">
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                        <div class="time-stamps">
                            <span class="time-current">0:00</span>
                            <span class="time-total">0:00</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sample 3 -->
            <div id="medical-demo" class="genre-card">
                <h3>Medical & Technical</h3>
                <p class="demo-subtitle">Precise Pronunciation of Terminology</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/hemostat.mp3"></audio>
                    <button class="master-play-btn" aria-label="Play">▶</button>
                    <div class="player-controls">
                        <div class="progress-container">
                            <div class="progress-bar"></div>
                        </div>
                        <div class="time-stamps">
                            <span class="time-current">0:00</span>
                            <span class="time-total">0:00</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;

    // 4. Trigger display and fade-in
    main.style.display = 'flex';
    setTimeout(() => {
        main.classList.add('show');
    }, 50);

    // 5. Attach player event listeners
    initMainPlayer();
}