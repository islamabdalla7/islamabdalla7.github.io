document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function changeNav() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => {
            link.classList.remove('active');
        });

        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    // Update active link on scroll
    window.addEventListener('scroll', changeNav);

    // Update active link when clicking on a nav link
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            // Remove active class from all links
            navLinks.forEach((navLink) => navLink.classList.remove('active'));
            
            // Add active class to the clicked link
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = event.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            event.target.classList.add('active');
        });
    });

    // Initial check to set the active link based on the current scroll position
    changeNav();
});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });
});
