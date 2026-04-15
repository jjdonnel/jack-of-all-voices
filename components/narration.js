function displayNarration() {
    // 1. Collapse the menu
closeMenu();

    // Stop audio from other sections
    const players = document.querySelectorAll('audio');
    players.forEach(player => player.pause());

    const main = document.getElementById('main');

    // 2. Prepare for the transition
    main.classList.remove('show');
    main.style.display = 'none';

    // 3. Inject Content
    main.innerHTML = `
        <div class="section">
            <h1 class="title">Narration Demos</h1>
            
            <div class="comps">
                <h3>Romance Sample</h3>
                <p>The "Luxury" read.</p>
                <audio controls>
                    <source src="./audio/4-6_romance.mp3" type="audio/mpeg">
                </audio>
            </div>

            <!-- <hr style="width:100%; border: 0.5px solid rgba(255,255,255,0.2); margin: 1em 0;">

             <div class="comps">
                <h3>Audiobook & E-Learning</h3>
                <p>Clear, consistent pacing for educational and literary content.</p>
                <audio controls>
                    <source src="./audio/narration-book.mp3" type="audio/mpeg">
                </audio>
            </div> -->
        </div>
    `;

    // 4. Trigger Fade-In
    main.style.display = 'flex';
    setTimeout(() => {
        main.classList.add('show');
    }, 50);
}