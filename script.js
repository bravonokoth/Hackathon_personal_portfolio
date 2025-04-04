// Initialize Feather Icons
feather.replace();

// Smooth scrolling for navigation
document.querySelectorAll('.nav-item a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });

        // Update active state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        this.parentElement.classList.add('active');
    });
});

// CV Download functionality
document.getElementById('download-cv').addEventListener('click', () => {
    const link = document.createElement('a');
    const fileName = 'Bravon Stack Cv.docx'; // Match the exact file name
    link.href = encodeURI(fileName); // Encode spaces as %20 for the URL
    link.download = 'Bravon_Stack_CV.docx'; // Cleaner name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Animate sections on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate project cards individually
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.2}s`;
                card.classList.add('animate-card');
            });
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});