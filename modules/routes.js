import { openProjects, closeProjects } from "./interaction.js"
import { getUserData, getRepoData } from "./getData.js";

export function router() {
    getRepoData()

    routie({
        '': () => {
            getUserData()
        },
        'github': () => {
            getUserData()
            openProjects()
            closeProjects()
        },
    })
}