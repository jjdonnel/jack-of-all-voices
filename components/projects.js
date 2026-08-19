// in components/projects.js
function displayProjects() {
    loadPage('Projects', (main) => {
        main.innerHTML = `
            <h1 class="page-title">Web Projects</h1>
            
            <div id="rhody-weather" class="genre-card glass-card">
                <h3>RhodyWeather</h3>
                <p class="demo-subtitle">Hyper-Local Weather &amp; Vector Lunar Tracking</p>
                <p class="project-description">
                    A sleek, responsive weather web application delivering real-time metrics, interactive forecasts, and custom vector lunar phase graphics.
                </p>
                <div class="tech-stack">
                    <span class="tech-badge">JavaScript</span>
                    <span class="tech-badge">CSS Glassmorphism</span>
                    <span class="tech-badge">PWA</span>
                </div>
                <div class="project-actions">
                    <a href="https://rhodyweather.com" target="_blank" rel="noopener noreferrer" class="btn-primary">Launch App ↗</a>
                </div>
            </div>

            <div id="rhody-calcs" class="genre-card glass-card">
                <h3>RhodyCalcs</h3>
                <p class="demo-subtitle">Fitness &amp; Utility Calculators</p>
                <p class="project-description">
                    A fast, lightweight web application suite offering quick daily computations and tailored fitness/calorie estimation tools.
                </p>
                <div class="tech-stack">
                    <span class="tech-badge">HTML5</span>
                    <span class="tech-badge">Vanilla JS</span>
                    <span class="tech-badge">CSS3</span>
                </div>
                <div class="project-actions">
                    <a href="#" class="btn-primary">Launch App ↗</a>
                </div>
            </div>

            <div id="vo-teleprompter" class="genre-card glass-card">
                <h3>VO Teleprompter</h3>
                <p class="demo-subtitle">Custom Browser Prompter for Voiceover</p>
                <p class="project-description">
                    A clean, highly customizable teleprompter tool designed specifically for narration sessions and smooth script reads.
                </p>
                <div class="tech-stack">
                    <span class="tech-badge">JavaScript</span>
                    <span class="tech-badge">DOM Animation</span>
                    <span class="tech-badge">UI/UX</span>
                </div>
                <div class="project-actions">
                    <a href="#" class="btn-primary">Launch App ↗</a>
                </div>
            </div>
        `;
    });
}