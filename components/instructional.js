// in components/instructional.js
function displayInstructional() {
    loadPage('Instructional', (main) => {
        main.innerHTML = `
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
                    <div class="download-actions-vertical">
                        <a href="./audio/assembly.mp3" download="JackDonnelly_Instructional_TechnicalAssembly.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="file-type">MP3</span>
                        </a>
                        <a href="./audio/assembly.wav" download="JackDonnelly_Instructional_TechnicalAssembly.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="file-type">WAV</span>
                        </a>
                    </div>
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
                    <div class="download-actions-vertical">
                        <a href="./audio/hemostat.mp3" download="JackDonnelly_Instructional_MedicalTechnical.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="file-type">MP3</span>
                        </a>
                        <a href="./audio/hemostat.wav" download="JackDonnelly_Instructional_MedicalTechnical.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="file-type">WAV</span>
                        </a>
                    </div>
                </div>
            </div>
            `;

        // Attach player event listeners after DOM insertion
        initMainPlayer();
    });
}