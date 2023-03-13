const repoList = document.querySelector("main > ul");
const navList = document.querySelector("nav");
const menuList = document.querySelector("nav ul")

export function openProjects() {
    repoList.classList.add('showProjects');    
    navList.classList.add('menuPosition')
    menuList.classList.add('changeMenu')
}

export function closeProjects() {
    if (window.location.hash === "#projects") {
        const closeButton = document.querySelector("nav ul li:nth-of-type(2) a");
        closeButton.addEventListener("click", function() {
            history.back()
            repoList.classList.remove('showProjects');
            navList.classList.remove('menuPosition');
            menuList.classList.remove('changeMenu')    
        })
    }  
}

