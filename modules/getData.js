import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { token } from "../keys.js"
import { renderUser, renderAvatar, renderRepo } from "./render.js"

export async function getData() {
    const octokit = new Octokit({ auth: token});

    // Getting the username
    const { data: { login }, } = await octokit.rest.users.getAuthenticated();

      // Getting the profile picture
    const { data: { avatar_url } } = await octokit.rest.users.getAuthenticated();
    
    // Getting repositories
    const { data: repositories } = await octokit.rest.repos.listForAuthenticatedUser({
            // Data for repos
        });
    // Filter data by using map
    const filterRepo = repositories.map(repo => ({
      name: repo.name,
    }))

     renderUser(login)
     renderAvatar(avatar_url)
     renderRepo(filterRepo)    
}