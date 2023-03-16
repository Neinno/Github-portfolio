import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { token } from "../keys.js"
import { renderUser, renderGithubLink, renderAvatar, renderRepo } from "./render.js"

const octokit = new Octokit({ auth: token});

export async function getUserData() {
  // Getting the username
  const { data: { login, html_url }, } = await octokit.rest.users.getAuthenticated();

  // Getting the profile picture
  const { data: { avatar_url } } = await octokit.rest.users.getAuthenticated();
 
  renderUser(login)
  renderGithubLink(html_url)
  renderAvatar(avatar_url)  
}

export async function getRepoData() {
  // Getting repositories
  const { data: repositories } = await octokit.rest.repos.listForAuthenticatedUser();

  // Filter data by using map
  const filterRepo = repositories
  .map(repo => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    url: repo.html_url,
    owner: repo.owner.login
  }))
  .filter(repo => repo.owner === 'Neinno');

  renderRepo(filterRepo)    
}