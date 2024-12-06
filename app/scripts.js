document.addEventListener("DOMContentLoaded", () => {
    // Navbar toggle for mobile view
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        document.querySelector('.navbar-menu').classList.toggle('active');
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // Close navbar menu on link click
            document.querySelector('.navbar-menu').classList.remove('active');
        });
    });

    // Remove the lightning bolt after animation
    const lightningBolt = document.querySelector(".lightning-bolt");
    setTimeout(() => {
        lightningBolt.style.display = "none";
    }, 1000);

    // Trigger fade-in animation for the about section on scroll
    const aboutSection = document.querySelector("#about");
    const revealAbout = () => {
        const sectionPos = aboutSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.5;

        if (sectionPos < screenPos) {
            aboutSection.classList.add("visible");
        }
    };

    window.addEventListener("scroll", revealAbout);
    revealAbout(); // Check on load
});
