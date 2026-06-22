document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');
    const body = document.body;

    const themes = {
        "section-0": "#ffffff",
        "section-1": "#eef4f8",
        "section-2": "#ecf2f6",
        "section-3": "#ecf3f6",
        "section-4": "#eef2f5",
        "section-5": "#ecf2f6",
        "section-6": "#eef2f5",
        "section-7": "#ebf3fa",
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
