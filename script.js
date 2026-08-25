// Animation au défilement pour la Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '12px 8%';
        navbar.style.background = 'rgba(15, 17, 21, 0.98)';
    } else {
        navbar.style.padding = '20px 8%';
        navbar.style.background = 'rgba(15, 17, 21, 0.9)';
    }
});

// Traitement du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci ! Votre message a été envoyé avec succès.');
    this.reset();
});