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
    document.getElementById('formResult').textContent = 'Merci ! Votre message a été envoyé avec succès.';
    document.getElementById('formResult').style.display = 'block';
    this.reset();
});

// Gestion du Menu Mobile (Burger)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Basculer l'icône entre 3 traits (fa-bars) et la croix (fa-times)
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fermer le menu automatiquement au clic sur un lien
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}