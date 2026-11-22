/* MORENO PROJECT 2 — shared page behavior */

document.addEventListener("DOMContentLoaded", () => {
    // Display the current year in the footer.
    const yearElement = document.querySelector("[data-year]");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Highlight the current page in the navigation.
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navigationLinks = document.querySelectorAll(".navbar .nav-link");

    navigationLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    // Demonstration form only: no message is sent or stored.
    const demoForm = document.getElementById("demoContactForm");

    if (demoForm) {
        demoForm.addEventListener("submit", (event) => {
            event.preventDefault();

            alert(
                "Demo form only. Your message was not sent or saved. " +
                "Please use the official KCC contact channels."
            );

            demoForm.reset();
        });
    }
});
