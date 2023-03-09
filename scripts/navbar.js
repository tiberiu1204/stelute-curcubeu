
const navbar = q(".navbar");
const navContainer = q(".navbar__pages__list");
const navMenuBtn = q(".navbar__menu__button");
const navMenuContent = q(".navbar__menu__content");
const closeNavMenuButton = q(".close__menu__button");
const navbarPagesItem = qAll(".navbar__pages__item");

//navbar responsivness

if(window.innerWidth < 1020) {
    navContainer.classList.add("hidden");
    navMenuBtn.classList.remove("hidden");
    navbar.style.padding = "0 40px";
}

addEventListener("resize", event => {
    
    //hide & show pages

    if(window.innerWidth < 1020) {
        navContainer.classList.add("hidden");
        navMenuBtn.classList.remove("hidden");
        navbar.style.padding = "0 40px";
    } else {
        navContainer.classList.remove("hidden");
        navMenuBtn.classList.add("hidden");
        navMenuContent.classList.remove("show-menu-content");
        navbar.style.padding = "0 70px";
    }

    //control menu content width
    
    if(window.innerWidth < 640) {
        navMenuContent.style.width = "100%";
    } else {
        navMenuContent.style.width = "484px"
    }
});

//menu open and close

navMenuBtn.addEventListener("click", event => {
    navMenuContent.classList.add("show-menu-content");
    if(window.innerWidth < 640) {
        navMenuContent.style.width = "100%";
    } else {
        navMenuContent.style.width = "484px"
    }
});

closeNavMenuButton.addEventListener("click", event => {
    navMenuContent.classList.remove("show-menu-content");
});

//underline and color pages link when hover

navbarPagesItem.forEach(item => {
    item.addEventListener("mouseover", event => {
        item.querySelector(".navbar__pages__link").style.color = "#45067d";
        item.querySelector(".underline__link").style.width = "100%";
    });
    item.addEventListener("mouseout", event => {
        item.querySelector(".navbar__pages__link").style.color = "#2e2e2e";
        item.querySelector(".underline__link").style.width = "0";
    });  
});

//query function

function q(query) {
    const res = document.querySelector(query);
    if(res == null) {
        console.log("Null Query");
    }
    return res;
}

function qAll(query) {
    const res = document.querySelectorAll(query);
    if(res == null) {
        console.log("Null Query");
    }
    return res;
}