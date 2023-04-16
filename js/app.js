let body = document.querySelector(`body`)

let btn = document.querySelector (`.darkModeTogglerBtn`)

let sunIcon = btn.querySelector (`.sun`)

let heading = document.querySelector (`.textarea`)

function darkModeToggler() {
    body.classList.toggle(`darkmode`)

    let isDarkMode = body.classList.contains(`darkmode`)

    if(isDarkMode) {
        heading.innerHTML = `Dark Mode`
        sunIcon.style.marginTop = `-100%`
    }

    if (isDarkMode == false) {
        heading.innerHTML = `Light Mode`
        sunIcon.style.marginTop = `0%`
    }
}


btn.addEventListener(`click`, darkModeToggler)