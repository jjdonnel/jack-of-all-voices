// in components/home.js
function displayHome() {
    loadPage('Jack of All Voices', (main) => {
        main.innerHTML = `
            <!-- Hero Tagline -->
            <div class="tagline-container">
                <h1 class="hero-tagline">Jack Donnelly</h1>
                <p class="hero-subtagline">From First Read to Final Edit... Voiceover That Hits The Mark.</p>
            </div>

            <!-- Featured Read Card -->
            <div class="genre-card glass-card">
                <h3>Featured Read: The Ironworks</h3>
                <p class="demo-subtitle">Dramatic Narration</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="audio/Ironworks.mp3"></audio>
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

            <!-- Romance Sample Card -->
            <div class="genre-card glass-card">
                <h3>Romance Sample</h3>
                <p class="demo-subtitle">The "Luxury" read</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/CoastFog.mp3"></audio>
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

            <!-- Commercial Sample Card -->
            <div class="genre-card glass-card">
                <h3>Main Commercial Reel</h3>
                <p class="demo-subtitle">Outdoor Gear Commercial</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/HarborCraft.mp3"></audio>
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

            <!-- Instructional Sample Card -->
            <div class="genre-card glass-card">
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

            <!-- Video Feature -->
            ${createVideoPlayer('https://res.cloudinary.com/jjdonnel/video/upload/v1779157758/secondEditedVideo_qncjsc.mp4', 'images/jack-studio.jpg', 'Jack in the Studio')}
        `;

        // Initialize audio players after DOM content is rendered
        initMainPlayer();
    });
}