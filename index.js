// side barre

    // Fonction pour gérer l'affichage de la barre de navigation
function toggleNav() {
    document.getElementById("sidebar").classList.toggle("active"); // Ajouter ou supprimer la classe active
}

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const languageSelect = document.getElementById("languageSelect");

    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        const arrow = document.querySelector(`[data-target="${sectionId}"] .arrow`);

        if (section.classList.contains("hidden")) {
            section.classList.remove("hidden");
            section.style.display = "block";
            arrow.style.transform = "rotate(180deg)";
        } else {
            section.classList.add("hidden");
            section.style.display = "none";
            arrow.style.transform = "rotate(0deg)";
        }
    }

    // Appliquer toggleSection sur chaque option
    document.querySelectorAll(".option").forEach(option => {
        option.addEventListener("click", () => {
            const sectionId = option.getAttribute("data-target");
            toggleSection(sectionId);
        });
    });
    
    

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", darkModeToggle.checked ? "enabled" : "disabled");
    });

    languageSelect.value = localStorage.getItem("language") || "fr";
    languageSelect.addEventListener("change", () => {
        localStorage.setItem("language", languageSelect.value);
        alert("Langue changée en " + languageSelect.value);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Load stored information
    const nomInput = document.getElementById("nom");
    const prenomInput = document.getElementById("prenom");
    const emailInput = document.getElementById("email");
    const telephoneInput = document.getElementById("telephone");
    const passwordInput = document.getElementById("password");

    nomInput.value = localStorage.getItem("nom") || "";
    prenomInput.value = localStorage.getItem("prenom") || "";
    emailInput.value = localStorage.getItem("email") || "";
    telephoneInput.value = localStorage.getItem("telephone") || "";
    passwordInput.value = localStorage.getItem("password") || "";

    // Function to save user information
    window.saveUserInfo = function() {
        localStorage.setItem("nom", nomInput.value);
        localStorage.setItem("prenom", prenomInput.value);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("telephone", telephoneInput.value);
        localStorage.setItem("password", passwordInput.value);

        // Dispatch a custom event to notify other pages
        window.dispatchEvent(new Event("storage"));

        alert("Informations enregistrées !");
    };
});



const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");

if (togglePassword) {
    togglePassword.addEventListener("click", function () {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });
}

