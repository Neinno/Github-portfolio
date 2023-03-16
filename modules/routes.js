import { openProjects, closeProjects, flipCard, expandButton } from "./interaction.js"
import { getUserData, getRepoData } from "./getData.js";

export function router() {
    getRepoData()
    getUserData()

    routie({
        '': () => {
            flipCard() 
            expandButton()   
        },
        'projects': () => {
            openProjects()
            closeProjects()
        },
    })
}