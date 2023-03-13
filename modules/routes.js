import { openProjects, closeProjects } from "./interaction.js"
import { getData } from "./getData.js";

export function router() {

    routie({
        '': () => {
            getData()
        },
        'projects': () => {
            getData()
            openProjects()
            closeProjects()
        },
    })
}