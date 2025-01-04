// Gestion du header au défilement
const navbar = document.querySelector('.navbar');
const scrollThreshold = 50; // Seuil de défilement en pixels

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation du bouton CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'translateY(-5px)';
    });
    
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = 'translateY(0)';
    });
}

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Ici vous pouvez ajouter la logique d'envoi du formulaire
        alert('Message envoyé avec succès !');
        contactForm.reset();
    });
}
