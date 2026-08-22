// in components/about.js
function displayAbout() {
    loadPage('About Me', (main) => {
        main.innerHTML = `
            <div class="section glass-card">
    <h2 class="section-title">About Jack</h2>
    <div class="about-grid">
        
        <div class="about-photo">
            <img src="images/jack-studio.jpg" alt="Jack in the studio">
        </div>
        
        <div class="about-text-content">
            <p class="lead-text">The Forecaster of Sound: Precision in Code. Passion in Voice.</p>
            
            <p>Based in my loft studio in Providence, I bridge the gap between technical precision and creative performance. For twenty-seven years, I forecasted the storms in the sky, learning that in the face of the unpredictable, <strong>clarity is everything.</strong></p>
            
            <p>I’ve navigated the "storm of a lifetime" — facing metastatic cancer with the same grit I bring to the booth. That journey sharpened my perspective and reclaimed a level of focus that I now pour into every script and every line of code.</p>
            
            <div class="skills-box">
                <h4>What I Do:</h4>
                <ul class="skills-list">
                    <li>🎙️ Commercial & Narrative VO</li>
                    <li>📚 Technical & Instructional Reads</li>
                    <li>💻 Front-End Web Development</li>
                </ul>
            </div>
        </div>
        
    </div>
</div>
        `;
    });
}