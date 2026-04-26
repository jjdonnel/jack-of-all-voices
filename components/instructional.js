function displayInstructional() {
    // 1. Collapse the menu
  closeMenu();

    const players = document.querySelectorAll('audio');
    players.forEach(player => player.pause());

    const main = document.getElementById('main');

    // 2. Prepare for the transition
    main.classList.remove('show');
    main.style.display = 'none';

    // 3. Inject Content
    main.innerHTML = `
        <div class="section">
            <h1 class="title">Instructional Demos</h1>
            
            <div id="corporate-training" class="comps">
                <h3>Corporate Training</h3>
                <p>Professional and informative delivery for internal communications.</p>
                <audio controls>
                    <source src="./audio/4-6_Golf.mp3" type="audio/mpeg">
                </audio>
            </div>

           <!-- <hr style="width:100%; border: 0.5px solid rgba(255,255,255,0.2); margin: 1em 0;">

            <div class="comps">
                <h3>Medical & Technical</h3>
                <p>Precise pronunciation of complex terminology and procedures.</p>
                <audio controls>
                    <source src="./audio/instructional-tech.mp3" type="audio/mpeg">
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