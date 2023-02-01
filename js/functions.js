loadCompanyLogos();
loadAssessments();

function loadCompanyLogos() {
    const divs = document.querySelectorAll(".logo");

    divs.forEach(div => {
        div.style.backgroundImage = `url("img/${div.dataset.src}")`;
    });
}

function loadAssessments() {
    const divs = document.querySelectorAll(".assessment");

    divs.forEach(div => {
        div.style.backgroundImage = `url("img/${div.dataset.src}")`;
    });
}