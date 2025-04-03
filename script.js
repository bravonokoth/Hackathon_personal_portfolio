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
    link.href = 'cv.docx'; // Points to your .doc file
    link.download = 'Brvon Stack Cv.docx';
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

// Add custom animations via JavaScript
const style = document.createElement('style');
style.innerHTML = `
    .animate-text {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 1s ease forwards;
    }
    .animate-text:nth-child(1) { animation-delay: 0.5s; }
    .animate-text:nth-child(2) { animation-delay: 1s; }
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .project-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .animate-card {
        animation: fadeInUp 0.5s ease forwards;
    }
    .nav-item.active {
        color: hsl(260, 100%, 80%);
        text-shadow: 0 0 3px hsla(260, 100%, 70%, 0.7);
    }
    .nav-item:not(.active):hover {
        color: rgba(255, 255, 255, 0.87);
    }
    .nav-item:hover .subicon {
        height: 32px;
        width: 32px;
        border-radius: 32px;
        top: -16px;
        right: -16px;
        border-color: white;
    }
`;
document.head.appendChild(style);