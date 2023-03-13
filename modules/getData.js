import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { token } from "../keys.js"
import { render } from "./render.js"

export async function getData() {
    const octokit = new Octokit({ auth: token});

    // Getting the username
    const { data: { login }, } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s", login);

      // Getting the profile picture
    const { data: { avatar_url } } = await octokit.rest.users.getAuthenticated();
    console.log(avatar_url);
    
    // Getting repositories
    const { data: repositories } = await octokit.rest.repos.listForAuthenticatedUser({
            // Data for repos
        });
     console.log(repositories);

     render(repositories)
}