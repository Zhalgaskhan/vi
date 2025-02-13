document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scroll-section");

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Check immediately in case some sections are visible

    // Button click events for showing GIFs
    document.getElementById("yesButton").addEventListener("click", function () {
        document.getElementById("yesGif").classList.remove("hidden");
        document.getElementById("noGif").classList.add("hidden");
    });

    document.getElementById("noButton").addEventListener("click", function () {
        document.getElementById("noGif").classList.remove("hidden");
        document.getElementById("yesGif").classList.add("hidden");
    });
});
