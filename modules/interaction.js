const repoList = document.querySelector("main > ul");
const navList = document.querySelector("nav");
const menuList = document.querySelector("nav ul");

const centerButton = document.querySelector("nav ul li:nth-of-type(2) a");
const centerButtonText = document.querySelector("nav ul li:nth-of-type(2) p");
const centerButtonIcon = document.querySelector("nav ul li:nth-of-type(2) i");

const menuButtonOne = document.querySelector("nav ul li:nth-of-type(1)");
const menuButtonThree = document.querySelector("nav ul li:nth-of-type(3)");

export function openProjects() {
    repoList.classList.add('showProjects');    
    navList.classList.add('menuPosition');
    menuList.classList.add('changeMenu');

    centerButtonIcon.classList.add('showX');
    centerButtonText.innerHTML = ""

    menuButtonOne.classList.add('hideMenuButton');
    menuButtonThree.classList.add('hideMenuButton');
}

export function closeProjects() {
    if (window.location.hash === "#github") {
        centerButton.addEventListener("click", function() {
            window.history.back()
            repoList.classList.remove('showProjects');
            navList.classList.remove('menuPosition');
            menuList.classList.remove('changeMenu');

            centerButtonIcon.classList.remove('showX');
            centerButtonText.innerHTML = "Projects"

            menuButtonOne.classList.remove('hideMenuButton')
            menuButtonThree.classList.remove('hideMenuButton')     
        })
    }  
}
