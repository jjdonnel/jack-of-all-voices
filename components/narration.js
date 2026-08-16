// in components/narration.js
function displayNarration() {
    loadPage('Narration', (main) => {
        main.innerHTML = `
            <h1 class="page-title">Narration Demos</h1>
            <!-- Sample 1: Romance -->
            <div id="romance" class="genre-card glass-card">
                <h3>Romance</h3>
                <p class="demo-subtitle">The "Luxury" Read</p>
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
                    <a href="./audio/CoastFog.wav" download="JackDonnelly_Narration_Romance.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Sample 2: High Fantasy -->
            <div id="high-fantasy" class="genre-card glass-card">
                <h3>High Fantasy</h3>
                <p class="demo-subtitle">The "Epic Fantasy" Read</p>
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
                    <a href="./audio/Aethelgard.wav" download="JackDonnelly_Narration_HighFantasy.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Sample 3: Mystery -->
            <div id="mystery" class="genre-card glass-card">
                <h3>Mystery &amp; Suspense</h3>
                <p class="demo-subtitle">The "Haunting" Read</p>
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
                    <a href="./audio/darkTavern.wav" download="JackDonnelly_Narration_Mystery.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Sample 4: Spiritual -->
            <div id="spiritual" class="genre-card glass-card">
                <h3>Spiritual &amp; Reflective</h3>
                <p class="demo-subtitle">The "Wonder" Read</p>
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
                    <a href="./audio/NDE.wav" download="JackDonnelly_Narration_Spiritual.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Sample 5: Movie Preview -->
            <div id="movie-preview" class="genre-card glass-card">
                <h3>Cinematic / Movie Trailer</h3>
                <p class="demo-subtitle">The "Preview" Read</p>
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
                    <a href="./audio/Breakfast.wav" download="JackDonnelly_Narration_CinematicPreview.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
            `;

        // Re-attach custom player event listeners after rendering
        initMainPlayer();
    });
}