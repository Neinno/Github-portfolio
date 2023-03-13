import { Octokit, App } from "https://cdn.skypack.dev/octokit";
import { token } from "./keys.js"

const octokit = new Octokit({ auth: token});

const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  console.log("Hello, %s", login);
