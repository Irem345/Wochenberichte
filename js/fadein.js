// Intersection Observer API initialisieren
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
});

// Elemente auswählen und den Observer hinzufügen
const fadeElements = document.querySelectorAll('.fade-in-up');
fadeElements.forEach(element => {
    observer.observe(element);
});
window.addEventListener('scroll', function () {
    var object = document.getElementById('container');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition >= 100) {
        object.style.opacity = '0';
    } else {
        object.style.opacity = '1';
    }
});