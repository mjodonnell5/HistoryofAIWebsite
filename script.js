// Smooth scrolling to sections when clicking on buttons or links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});
