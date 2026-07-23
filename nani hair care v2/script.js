AOS.init({
    duration: 1000,
    once: true
});

// ===== Booking form submit =====
const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

    form.reset();
});

// ===== Contact form submit =====
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const toast = document.getElementById("toast");
        const toastText = toast.querySelector("span");
        const originalText = toastText.textContent;

        toastText.textContent = "Message sent successfully!";
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
            toastText.textContent = originalText;
        }, 3000);

        contactForm.reset();
    });
}

// ===== Back to top button =====
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// ===== Cursor glow effect =====
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// ===== Mobile menu toggle =====
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navOverlay = document.querySelector(".nav-overlay");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navOverlay.classList.toggle("active");
});

navOverlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navOverlay.classList.remove("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navOverlay.classList.remove("active");
    });
});
