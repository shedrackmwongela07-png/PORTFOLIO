const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menu.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menu.textContent = "☰";
    });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        document.getElementById("formMessage").textContent =
            "Please fill in all fields.";
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href =
        `mailto:?subject=${subject}&body=${body}`;

    document.getElementById("formMessage").textContent =
        "Your email application is opening.";
});
