function handleChanges() {
    document.getElementById("project-container").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function projectClicked() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("project-container").style.display = "block";
    document.getElementById("portfolio").style.width = "90%";
    document.getElementById("portfolio").style.height = "100%";
}

function homeClicked() {
    document.getElementById("intro").style.display = "flex";
    document.getElementById("img").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("project-container").style.display = "none";
    document.getElementById("portfolio").style.width = "50%";
    document.getElementById("portfolio").style.height = "70%";

    if (window.matchMedia('screen and (max-width: 600px)').matches) {
        
        document.getElementById("portfolio").style.width = "80%";
        document.getElementById("portfolio").style.height = "80%";
    }
}

function contactClicked() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("contact").style.display = "flex";
    document.getElementById("img").style.display = "none";
    document.getElementById("project-container").style.display = "none";
    document.getElementById("portfolio").style.width = "50%";
    document.getElementById("portfolio").style.height = "70%";

    if (window.matchMedia('screen and (max-width: 600px)').matches) {
        
        document.getElementById("portfolio").style.width = "80%";
        document.getElementById("portfolio").style.height = "80%";
    }
}

function resumeClicked() {
    window.open('/assets/Ajay resume.pdf');
}