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
                <h3>Multi-Genre Montage</h3>
                <p class="demo-subtitle">Dynamic Range & Versatility</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="audio/legend.mp3"></audio>
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
                        <a href="./audio/legend.mp3" download="JackDonnelly_Commercial_patient.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="file-type">MP3</span>
                        </a>
                        <a href="./audio/legend.wav" download="JackDonnelly_Commercial_patient.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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

            <!-- Empathy Sample Card -->
            <div class="genre-card glass-card">
                <h3>Medical & Healthcare</h3>
                <p class="demo-subtitle">Compassionate & Empathetic</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/patient.mp3"></audio>
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
                        <a href="./audio/patient.mp3" download="JackDonnelly_Commercial_patient.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="file-type">MP3</span>
                        </a>
                        <a href="./audio/patient.wav" download="JackDonnelly_Commercial_patient.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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

            <!-- Commercial Sample Card -->
            <div class="genre-card glass-card">
                <h3>Aerospace & defense Tech</h3>
                <p class="demo-subtitle">Grounded & Technical</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/visionary.mp3"></audio>
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
                        <a href="./audio/visionary.mp3" download="JackDonnelly_Commercial_Visionary.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="file-type">MP3</span>
                        </a>
                        <a href="./audio/visionary.wav" download="JackDonnelly_Commercial_Visionary.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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

            <!-- Instructional Sample Card -->
            <div class="genre-card glass-card">
                <h3>Rough Velvet Narrative</h3>
                <p class="demo-subtitle">Intimate & Luxury Ads</p>
                <div class="audio-player-wrapper">
                    <audio class="audio-element" src="./audio/providenceFog.mp3"></audio>
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
                        <a href="./audio/providenceFog.mp3" download="JackDonnelly_Commercial_ProvidenceFog.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            <span class="file-type">MP3</span>
                        </a>
                        <a href="./audio/providenceFog.wav" download="JackDonnelly_Commercial_ProvidenceFog.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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

            <!-- Video Feature -->
            ${createVideoPlayer('https://res.cloudinary.com/jjdonnel/video/upload/v1779157758/secondEditedVideo_qncjsc.mp4', 'images/jack-studio.jpg', 'Jack in the Studio')}
        `;

        // Initialize audio players after DOM content is rendered
        initMainPlayer();
    });
}