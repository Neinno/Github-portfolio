const mainSection = document.querySelector("main");

const personalInfo = document.querySelector("main section:first-of-type")

const repoList = document.querySelector("main > ul");
const navList = document.querySelector("nav");
const menuList = document.querySelector("nav ul");

const centerButton = document.querySelector("nav ul li:nth-of-type(2) a");
const centerButtonText = document.querySelector("nav ul li:nth-of-type(2) p");
const centerButtonIcon = document.querySelector("nav ul li:nth-of-type(2) i");

const menuButtonOne = document.querySelector("nav ul li:nth-of-type(1)");
const menuButtonThree = document.querySelector("nav ul li:nth-of-type(3)");

const formButtons = document.querySelector("form")

const backsideCV = document.querySelector("section:nth-of-type(2) button:first-of-type")
const backsideContact = document.querySelector("section:nth-of-type(2) button:nth-of-type(2)")

export function openProjects() {
    personalInfo.classList.add('hidePersonalInfo')

    repoList.classList.add('showProjects');    
    navList.classList.add('menuPosition');
    menuList.classList.add('changeMenu');

    formButtons.classList.add('showForm');

    centerButtonIcon.classList.add('showX');
    centerButtonText.innerHTML = "";

    menuButtonOne.classList.add('hideMenuButton');
    menuButtonThree.classList.add('hideMenuButton');
}

export function closeProjects() {
    if (centerButtonIcon.classList.contains('showX')) {
        centerButton.addEventListener("click", function() {
            personalInfo.classList.remove('hidePersonalInfo');

            repoList.classList.remove('showProjects');
            navList.classList.remove('menuPosition');
            menuList.classList.remove('changeMenu');

            formButtons.classList.remove('showForm');

            centerButtonIcon.classList.remove('showX');
            centerButtonText.innerHTML = "Projects";

            menuButtonOne.classList.remove('hideMenuButton');
            menuButtonThree.classList.remove('hideMenuButton');
            
            if (window.location.hash) {
                history.back();
            } else {
            
                window.location.href = '';
            }
            
            currentPage = '';
        })
    } 
}

export function flipCard() {
    const aboutLabel = document.querySelector("main > aside")
    const backLabel = document.querySelector("section:nth-of-type(2) > aside")
    aboutLabel.addEventListener("click", function() {
        mainSection.classList.add('flipCard')
        mainSection.classList.remove('flipCardBack')
    })

    backLabel.addEventListener("click", function() {
        mainSection.classList.remove('flipCard')
        mainSection.classList.add('flipCardBack')
    })
}

export function expandButton() {
    const cvBall = document.querySelector("section:nth-of-type(2) button:first-of-type a")
    const contactBallOne = document.querySelector("section:nth-of-type(2) button:nth-of-type(2) > a:first-of-type")
    const contactBallTwo = document.querySelector("section:nth-of-type(2) button:nth-of-type(2) > a:nth-of-type(2)")

    backsideCV.addEventListener("click", function() {
        cvBall.classList.toggle("setInfoBall")
    });

    backsideContact.addEventListener("click", function() {
        contactBallOne.classList.toggle("setInfoBall")
        contactBallTwo.classList.toggle("setInfoBall")
    })
}
