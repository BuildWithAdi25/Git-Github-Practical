
// Theme toggle
const themeButton = document.querySelector("#themeToggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light");

        const currentTheme = document.body.classList.contains("light")
            ? "light"
            : "dark";

        localStorage.setItem("portfolio-theme", currentTheme);
        themeButton.textContent = currentTheme === "light" ? "☾" : "☀";
    });
}

// Load previously selected theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
}

if (themeButton) {
    themeButton.textContent =
        document.body.classList.contains("light") ? "☾" : "☀";
}

// Reveal sections when they enter the screen
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    observer.observe(element);
});
const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}