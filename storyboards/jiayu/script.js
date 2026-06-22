document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');
    const body = document.body;

    const themes = {
        "section-0": "#ffffff",
        "section-1": "#fdeee5",
        "section-2": "#f3f4f8",
        "section-3": "#f1f8f5",
        "section-4": "#f5f5f5",
        "section-5": "#f3f4f8",
        "section-6": "#f5f5f5",
        "section-7": "#fcf2e6",
        "section-8": "#ffffff"
    };

    const observerOptions = {
        root: document.querySelector('.story-container'),
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const sectionId = entry.target.id;
                if (themes[sectionId]) {
                    body.style.backgroundColor = themes[sectionId];
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});
