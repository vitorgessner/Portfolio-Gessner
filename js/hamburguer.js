(function () {
    let menu = document.getElementsByClassName("menu")[0]

    menu.addEventListener("click", function (e) {
        e.stopPropagation
        let navPages = document.getElementsByClassName("header--main__nav-pages")[0]
        let navLinks = document.getElementsByClassName("header--main__nav-links")[0]

        if (navPages.classList.contains("hide")) {
            navPages.classList.remove("hide")
            navLinks.classList.remove("hide")
        } else {
            navPages.classList.add("hide")
            navLinks.classList.add("hide")
        }
    })
})()