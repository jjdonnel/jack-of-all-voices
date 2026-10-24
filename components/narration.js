// in components/narration.js
function displayNarration() {
    loadPage('Narration', (main) => {
        main.innerHTML = `
            <h1 class="page-title">Narration & Audiobooks</h1>

            <!-- ========================================== -->
            <!-- PUBLISHED AUDIOBOOKS SHOWCASE              -->
            <!-- ========================================== -->
            <section class="published-section">
                <h2 class="section-subtitle-heading">Published Releases</h2>

                <!-- Book 1: Giveth and Taketh Away -->
                <div id="giveth-and-taketh" class="genre-card glass-card audiobook-card">
                    <div class="audiobook-header">
                        <span class="platform-badge audible">Audible Release</span>
                        <h3>Giveth and Taketh Away</h3>
                        <p class="demo-subtitle">The Hauntings, #2 • Paranormal / Suspense</p>
                    </div>

                    <div class="audiobook-content-layout">
                        <!-- Cover Art Frame -->
                        <div class="cover-art-container">
                            <img src="images/giveth_and_taketh.jpg" alt="Giveth and Taketh Away Book Cover" class="cover-art-img">
                        </div>

                        <!-- Player & Download Actions -->
                        <div class="audiobook-player-area">
                            <div class="audio-player-wrapper">
                                <audio class="audio-element" src="./audio/giveth_and_taketh_away_sample.wav"></audio>
                                <button class="master-play-btn" aria-label="Play Sample">▶</button>
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
                                    <a href="./audio/giveth_and_taketh_away_Sample.mp3" download="JackDonnelly_GivethAndTaketh_Sample.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        <span class="file-type">MP3</span>
                                    </a>
                                    <a href="./audio/giveth_and_taketh_away_Sample.wav" download="JackDonnelly_GivethAndTaketh_Sample.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        <span class="file-type">WAV</span>
                                    </a>
                                </div>
                            </div>

                            <!-- External Links & Hiring CTA -->
                            <div class="audiobook-cta-row">
                                <a href="https://www.audible.com/pd/Giveth-and-Taketh-Away-The-Hauntings-2-Audiobook/B0HNTXV125?qid=1792845806&intent=discovery&sr=1-1&ref_pageloadid=not_applicable&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=JYA81BQQ58HZ2GQ87WKM&plink=ETa9vMJg62nEH87t&pageLoadId=0T2Ctlo46UKR6dBs&creativeId=0d6f6720-f41c-457e-a42b-8c8dceb62f2c&ref=a_search_c3_lProduct_1_1" target="_blank" rel="noopener noreferrer" class="cta-link-btn primary-cta">
                                    Listen on Audible 🎧
                                </a>
                                <a href="#contact" class="cta-link-btn secondary-cta">
                                    Request Narration Quote 🎙️
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Book 2: The Mystery of Golf -->
                <div id="mystery-of-golf" class="genre-card glass-card audiobook-card">
                    <div class="audiobook-header">
                        <span class="platform-badge librivox">LibriVox Release</span>
                        <h3>The Mystery of Golf</h3>
                        <p class="demo-subtitle">Classic Literature & Essays • Non-Fiction</p>
                    </div>

                    <div class="audiobook-content-layout">
                        <!-- Cover Art Frame -->
                        <div class="cover-art-container">
                            <img src="images/mystery_golf_logo.jpg" alt="The Mystery of Golf Book Cover" class="cover-art-img">
                        </div>

                        <!-- Player & Download Actions -->
                        <div class="audiobook-player-area">
                            <div class="audio-player-wrapper">
                                <audio class="audio-element" src="./audio/simpleDelights.mp3"></audio>
                                <button class="master-play-btn" aria-label="Play Sample">▶</button>
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
                                    <a href="./audio/simpleDelights.mp3" download="JackDonnelly_MysteryOfGolf_Excerpt.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        <span class="file-type">MP3</span>
                                    </a>
                                    <a href="./audio/simpleDelights.wav" download="JackDonnelly_MysteryOfGolf_Excerpt.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        <span class="file-type">WAV</span>
                                    </a>
                                </div>
                            </div>

                            <!-- External Links & Hiring CTA -->
                            <div class="audiobook-cta-row">
                                <a href="https://librivox.org/the-mystery-of-golf-by-arnold-haultain/" target="_blank" rel="noopener noreferrer" class="cta-link-btn primary-cta">
                                    Listen / Download 📖
                                </a>
                                <a href="#contact" class="cta-link-btn secondary-cta">
                                    Request Narration Quote 🎙️
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========================================== -->
            <!-- GENRE DEMO REELS SECTION                   -->
            <!-- ========================================== -->
            <section class="demos-section">
                <h2 class="section-subtitle-heading">Genre Samples & Character Demos</h2>

                <!-- Sample 1: Romance -->
                <div id="romance" class="genre-card glass-card">
                    <h3>Romance & Fiction</h3>
                    <p class="demo-subtitle">Intimate, Expressive & Multi-Character</p>
                    <div class="audio-player-wrapper">
                        <audio class="audio-element" src="./audio/beaconStreet.mp3"></audio>
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
                            <a href="./audio/beaconStreet.mp3" download="JackDonnelly_Narration_Romance.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span class="file-type">MP3</span>
                            </a>
                            <a href="./audio/beaconStreet.wav" download="JackDonnelly_Narration_Romance.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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
                        <div class="download-actions-vertical">
                            <a href="./audio/Aethelgard.mp3" download="JackDonnelly_Narration_HighFantasy.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span class="file-type">MP3</span>
                            </a>
                            <a href="./audio/Aethelgard.wav" download="JackDonnelly_Narration_HighFantasy.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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
                        <div class="download-actions-vertical">
                            <a href="./audio/darkTavern.mp3" download="JackDonnelly_Narration_Mystery.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span class="file-type">MP3</span>
                            </a>
                            <a href="./audio/darkTavern.wav" download="JackDonnelly_Narration_Mystery.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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
                        <div class="download-actions-vertical">
                            <a href="./audio/NDE.mp3" download="JackDonnelly_Narration_Spiritual.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span class="file-type">MP3</span>
                            </a>
                            <a href="./audio/NDE.wav" download="JackDonnelly_Narration_Spiritual.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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
                        <div class="download-actions-vertical">
                            <a href="./audio/Breakfast.mp3" download="JackDonnelly_Narration_CinematicPreview.mp3" class="download-btn mp3-btn" title="Download MP3" aria-label="Download MP3">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                <span class="file-type">MP3</span>
                            </a>
                            <a href="./audio/Breakfast.wav" download="JackDonnelly_Narration_CinematicPreview.wav" class="download-btn wav-btn" title="Download WAV" aria-label="Download WAV">
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
            </section>
        `;

        // Re-attach custom player event listeners after rendering
        initMainPlayer();
    });
}