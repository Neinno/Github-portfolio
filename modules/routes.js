import { openProjects, closeProjects, flipCard } from "./interaction.js"
import { getUserData, getRepoData } from "./getData.js";

export function router() {
    getRepoData()

    routie({
        '': () => {
            flipCard()
            getUserData()
        },
        'github': () => {
            getUserData()
            openProjects()
            closeProjects()
        },
    })
}