// in components/commercial.js
function displayCommercial() {
    loadPage('Commercial', (main) => {
        main.innerHTML = `
            <div class="section">
                <h1 class="page-title">Commercial Demos</h1>
                
                <div id="outdoor-gear" class="genre-card">
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

                <div id="technical" class="genre-card">
                    <h3>High Tech & Hard Sell</h3>
                    <p class="demo-subtitle">Fast-paced, high-impact retail delivery</p>
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
                    </div>
                </div>

                <div id="adventure" class="genre-card">
                    <h3>Adventure & Hard Sell</h3>
                    <p class="demo-subtitle">Fast-paced, high-impact retail delivery</p>
                    <div class="audio-player-wrapper">
                        <audio class="audio-element" src="./audio/ApexX1.mp3"></audio>
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

                <div id="travel" class="genre-card">
                    <h3>Travel - Luggage</h3>
                    <p class="demo-subtitle">Fast-paced, high-impact retail delivery</p>
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
                    </div>
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