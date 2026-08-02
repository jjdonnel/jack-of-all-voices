// in components/narration.js
function displayNarration() {
    loadPage('Narration', (main) => {
        main.innerHTML = `
            <div class="section">
                <h1 class="page-title">Narration Demos</h1>
                
                <!-- Sample 1: Romance -->
                <div id="romance" class="genre-card">
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

                <!-- Sample 2: High Fantasy -->
                <div id="high-fantasy" class="genre-card">
                    <h3>High Fantasy Sample</h3>
                    <p class="demo-subtitle">The "Epic Fantasy" read</p>
                    <div class="audio-player-wrapper">
                        <audio class="audio-element" src="./audio/Aethelgard.mp3"></audio>
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

                <!-- Sample 3: Mystery -->
                <div id="mystery" class="genre-card">
                    <h3>Mystery</h3>
                    <p class="demo-subtitle">The "Haunting" read</p>
                    <div class="audio-player-wrapper">
                        <audio class="audio-element" src="./audio/darkTavern.mp3"></audio>
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

                <!-- Sample 4: Spiritual -->
                <div id="spiritual" class="genre-card">
                    <h3>Spiritual</h3>
                    <p class="demo-subtitle">The "Wonder" read</p>
                    <div class="audio-player-wrapper">
                        <audio class="audio-element" src="./audio/NDE.mp3"></audio>
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

                <!-- Sample 5: Movie Preview -->
                <div id="movie-preview" class="genre-card">
                    <h3>Movie</h3>
                    <p class="demo-subtitle">The "Preview" read</p>
                    <div class="audio-player-wrapper">
                        <audio class="audio-element" src="./audio/Breakfast.mp3"></audio>
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

        // Re-attach custom player event listeners after rendering
        initMainPlayer();
    });
}