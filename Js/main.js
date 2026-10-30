
    // Mobile menu toggle
    function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.add('hidden');
    });
});

    // Add animation on scroll
    const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'bloom 1s ease-out forwards';
        }
    });
}, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
