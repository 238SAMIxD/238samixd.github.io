loadCompanyLogos();

function loadCompanyLogos() {
    const divs = document.querySelectorAll(".company-logo");

    divs.forEach( div => {
        div.style.backgroundImage = `url("img/${div.dataset.src}")`;
        console.log(div)
    });
}