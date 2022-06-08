function loadCompanyLogos() {
    const divs = document.querySelectorAll(".company-logo");

    divs.forEach( div => {
        div.style.backgroundImage = div.dataset.src;
    });
}