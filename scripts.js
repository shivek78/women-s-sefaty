 // Direct calling functionality
        function makeCall(number) {
            if (confirm(`Call ${number}?`)) {
                window.open(`tel:${number}`, '_self');
            }
        }

        // Smooth scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Modal functions
        function showResourceModal(title, description) {
            document.getElementById('modal-body').innerHTML = `
                <h2 style="color: var(--primary-navy); margin-bottom: 1rem;">${title}</h2>
                <p style="margin-bottom: 1.5rem; color: var(--neutral-gray);">${description}</p>
                <div style="text-align: center;">
                    <button class="action-button primary" onclick="alert('Connecting you to local services...')">Find Services</button>
                </div>
            `;
            document.getElementById('modal').style.display = 'block';
        }

        function showArticle(title) {
            const articles = {
                'Workplace Safety': 'Learn about your legal rights in the workplace, how to report harassment, create safe environments, and access support resources for professional situations.',
                'Digital Privacy': 'Protect your online presence with strong security practices, privacy settings, safe social media usage, and awareness of digital threats.',
                'Travel Safety': 'Essential tips for safe travel including transportation security, accommodation safety, emergency preparedness, and staying connected while away.'
            };

            document.getElementById('modal-body').innerHTML = `
                <h2 style="color: var(--primary-navy); margin-bottom: 1rem;">${title}</h2>
                <p style="margin-bottom: 1.5rem; color: var(--neutral-gray);">${articles[title]}</p>
                <div style="text-align: center;">
                    <button class="action-button primary" onclick="window.open('https://ncw.nic.in/important-links/safety-tips', '_blank')">View Full Guide</button>
                </div>
            `;
            document.getElementById('modal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        // Navigation functionality
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Copy contact number to clipboard
        function copyNumber(number) {
            navigator.clipboard.writeText(number).then(() => {
                alert(`Number ${number} copied to clipboard!`);
            });
        }
