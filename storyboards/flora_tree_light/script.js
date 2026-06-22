document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.scroll-section');
    const body = document.body;

    const themes = {
        "section-0": "#ffffff",
        "section-1": "#f1f7e6",
        "section-2": "#eef5e8",
        "section-3": "#eef5e9",
        "section-4": "#f0f4e8",
        "section-5": "#eef5e8",
        "section-6": "#f0f4e8",
        "section-7": "#f5f5e1",
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
