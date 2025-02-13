document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll(".scroll-section");
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            section.classList.add("show");
        }
    });
});
