function handleChanges() {
    document.getElementById("project-container").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("btn-home").style.backgroundColor = "#86C232";
    document.getElementById("btn-home").style.color = "#fff";
}

function projectClicked() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("project-container").style.display = "block";
    document.getElementById("portfolio").style.width = "55%";
    document.getElementById("portfolio").style.height = "100%";
    document.getElementById("btn-home").style.backgroundColor = "transparent";
    document.getElementById("btn-proj").style.backgroundColor = "#86C232";
    document.getElementById("btn-contact").style.backgroundColor = "transparent";
    document.getElementById("btn-proj").style.color = "#fff";
    document.getElementById("btn-home").style.color = "#C5C6C7";
    document.getElementById("btn-contact").style.color = "#C5C6C7";
}

function homeClicked() {
    document.getElementById("intro").style.display = "flex";
    document.getElementById("img").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("project-container").style.display = "none";
    document.getElementById("portfolio").style.width = "50%";
    document.getElementById("portfolio").style.height = "70%";
    document.getElementById("btn-home").style.backgroundColor = "#86C232";
    document.getElementById("btn-proj").style.backgroundColor = "transparent";
    document.getElementById("btn-contact").style.backgroundColor = "transparent";
    document.getElementById("btn-home").style.color = "#fff";
    document.getElementById("btn-proj").style.color = "#C5C6C7";
    document.getElementById("btn-contact").style.color = "#C5C6C7";

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
    document.getElementById("btn-home").style.backgroundColor = "transparent";
    document.getElementById("btn-proj").style.backgroundColor = "transparent";
    document.getElementById("btn-contact").style.backgroundColor = "#86C232";
    document.getElementById("btn-contact").style.color = "#fff";
    document.getElementById("btn-home").style.color = "#C5C6C7";
    document.getElementById("btn-proj").style.color = "#C5C6C7";

    if (window.matchMedia('screen and (max-width: 600px)').matches) {
        
        document.getElementById("portfolio").style.width = "80%";
        document.getElementById("portfolio").style.height = "80%";
    }
}

function resumeClicked() {
    window.open('https://drive.google.com/open?id=1FfRJBxtulyniA8LcehNlgbmnmftmojGE');
}