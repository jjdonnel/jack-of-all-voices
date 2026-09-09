// in components/contact.js
function displayContact() {
    loadPage('Contact Jack', (main) => {
        main.innerHTML = `
            <div class="section glass-card contact-card">
                <h2 class="section-title">Let's Build Something Great</h2>
                <p class="contact-subtitle">Whether you need custom web development, narration, or audio mastering, drop your project details below.</p>
                
                <form class="contact-form" action="https://formspree.io/f/xlgagono" method="POST">
                    <div class="form-group">
                        <label for="client-name">Full Name</label>
                        <input type="text" id="client-name" name="name" placeholder="Jane Doe" required>
                    </div>

                    <div class="form-group">
                        <label for="client-email">Email Address</label>
                        <input type="email" id="client-email" name="email" placeholder="jane@example.com" required>
                    </div>

                    <div class="form-group">
                        <label for="project-type">Primary Service Needed</label>
                        <select id="project-type" name="service_type" required>
                            <option value="" disabled selected>Select a primary service...</option>
                            <option value="Web Starter ($350)">"Cast-Ready" Web Design - Starter ($350)</option>
                            <option value="Web Pro ($650)">"Cast-Ready" Web Design - Professional ($650)</option>
                            <option value="Audiobook / VO">Audiobook Narration & Commercial VO</option>
                            <option value="Audio Post-Production">Audio Post-Production & Mastering</option>
                            <option value="Full-Stack Production">Combined Web & Audio Production</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Optional Creative Add-Ons</label>
                        <div class="checkbox-group">
                            <label class="checkbox-label">
                                <input type="checkbox" name="addon_cover" value="Book/Podcast Cover Packaging (+$150)"> 
                                <span>Custom Book & Podcast Cover Packaging (+$150)</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" name="addon_icons" value="Vector Icon Pack (+$90)"> 
                                <span>Custom Vector UI & Branding Icon Pack (+$90)</span>
                            </label>
                            <label class="checkbox-label">
                                <input type="checkbox" name="addon_banners" value="Social Media Banner Kit (+$75)"> 
                                <span>Social Media Launch & Banner Kit (+$75)</span>
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="project-notes">Project Details & Script/Asset Links</label>
                        <textarea id="project-notes" name="message" placeholder="Tell me about your project timeline, script word count, or drop links to raw audio/design assets..." rows="5" required></textarea>
                    </div>

                    <button type="submit" class="btn-submit">Submit Project Request</button>
                </form>
                
                <div class="direct-contact">
                    <p>Or email directly: <a href="mailto:jack@jackofallvoices.com">jack@jackofallvoices.com</a></p>
                </div>
            </div>
        `;
    });
}