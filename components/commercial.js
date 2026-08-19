// in components/commercial.js
function displayCommercial() {
    loadPage('Commercial', (main) => {
        main.innerHTML = `
            <h1 class="page-title">Commercial Demos</h1>
            <div id="outdoor-gear" class="genre-card">
                <h3>Main Commercial Reel</h3>
                <p class="demo-subtitle">Outdoor & Lifestyle Gear</p>
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
                    <a href="./audio/HarborCraft.wav" download="JackDonnelly_Commercial_HarborCraft.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <div id="technical" class="genre-card">
                <h3>High Tech &amp; Tech Promo</h3>
                <p class="demo-subtitle">Sleek, Modern &amp; Authoritative</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/nexusCore9.mp3"></audio>
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
                    <a href="./audio/nexusCore9.wav" download="JackDonnelly_Commercial_NexusCore9.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <div id="adventure" class="genre-card">
                <h3>Luxury & Heritage</h3>
                <p class="demo-subtitle">Smooth, Refined & Timeless</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/highEndSpirit.mp3"></audio>
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
                    <a href="./audio/highEndSpirit.wav" download="JackDonnelly_Commercial_highEndSpirit.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <div id="travel" class="genre-card">
                <h3>Travel &amp; Hospitality</h3>
                <p class="demo-subtitle">Smooth, Inviting &amp; Sophisticated</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/vantage.mp3"></audio>
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
                    <a href="./audio/vantage.wav" download="JackDonnelly_Commercial_Vantage.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
            `;

        // Re-bind click event listeners to custom play buttons
        if (typeof initMainPlayer === 'function') {
            initMainPlayer();
        } else if (typeof setupAudioPlayers === 'function') {
            setupAudioPlayers();
        }
    });
}