const header = document.querySelector('header');
const logoSection = document.querySelector('.logo-section');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        logoSection.style.display = 'none';
    } else {
        logoSection.style.display = 'flex';
    }
});