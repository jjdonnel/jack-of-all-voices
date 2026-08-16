// in components/instructional.js
function displayInstructional() {
    loadPage('Instructional', (main) => {
        main.innerHTML = `
            <h1 class="page-title">Instructional Demos</h1>
            <!-- Sample 1 -->
            <div id="corporate-training" class="genre-card glass-card">
                <h3>Corporate Training</h3>
                <p class="demo-subtitle">Professional &amp; Informative Delivery</p>
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
                    <a href="./audio/4-6_Golf.wav" download="JackDonnelly_Instructional_CorporateTraining.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Sample 2 -->
            <div id="technical-demo" class="genre-card glass-card">
                <h3>Technical Assembly</h3>
                <p class="demo-subtitle">Clear Step-by-Step Guidance</p>
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
                    <a href="./audio/assembly.wav" download="JackDonnelly_Instructional_TechnicalAssembly.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Sample 3 -->
            <div id="medical-demo" class="genre-card glass-card">
                <h3>Medical &amp; Technical</h3>
                <p class="demo-subtitle">Precise Terminology &amp; Articulation</p>
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
                    <a href="./audio/hemostat.wav" download="JackDonnelly_Instructional_MedicalTechnical.wav" class="download-btn" title="Download WAV File" aria-label="Download WAV File">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
            `;

        // Attach player event listeners after DOM insertion
        initMainPlayer();
    });
}