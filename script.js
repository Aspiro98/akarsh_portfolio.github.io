// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('hover');
        });
        card.addEventListener('mouseout', () => {
            card.classList.remove('hover');
        });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 80;
        
        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
