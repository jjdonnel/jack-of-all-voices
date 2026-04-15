// in about.js
function displayAbout() {
    closeMenu();
    const main = document.getElementById('main');
    
    // Smooth transition out
    main.classList.remove('show');

    setTimeout(() => {
        main.innerHTML = `
            <div class="section glass-card">
                <h2 class="section-title">About Jack</h2>
                <div class="about-grid">
                    
                    <div class="about-photo">
                        <img src="images/jack-studio.jpg" alt="Jack in the studio">
                    </div>
                    
                    <div class="about-text-content">
                        <p class="lead-text">Web Developer by logic, Voiceover Artist by soul.</p>
                        <p>Based in my loft studio in Providence, I bridge the gap between technical precision and creative performance. Whether I'm debugging a complex script or delivering a high-energy commercial read, my goal is the same: clarity, impact, and authenticity.</p>
                        
                        <div class="skills-box">
                            <h4>What I Do:</h4>
                            <ul class="skills-list">
                                <li>🎙️ Commercial & Narrative VO</li>
                                <li>💻 Front-End Web Development</li>
                                <li>🎧 High-End Audio Production</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        `;
        // Fade back in
        main.classList.add('show');
    }, 300);
}