// THEME TOGGLE
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});

// MOBILE NAV
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// TYPING EFFECT
const words = ["Full Stack Developer", "MERN Stack Developer", "Django Developer"];
let wordIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent =
            words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 300);
    }
}

document.addEventListener("DOMContentLoaded", type);

// SKILL ANIMATION
window.addEventListener("scroll", () => {
    document.querySelectorAll(".progress div").forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
});



// ===== MODAL =====
function openModal(title, description) {
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-description").textContent = description;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// CLOSE MODAL WHEN CLICK OUTSIDE
window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ===== CONTACT FORM VALIDATION =====
const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    successMsg.textContent = "Message sent successfully!";
    form.reset();

    setTimeout(() => {
        successMsg.textContent = "";
    }, 3000);
});
