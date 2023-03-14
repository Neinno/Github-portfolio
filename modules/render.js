// Render login (Github Username)
export function renderUser(login) {
    const username = document.querySelector("h1");

    username.innerHTML = `Nigel "${login}" Fijnheer`;
}

// Render Avatar
export function renderAvatar(avatar_url) {
  const avatar = document.querySelector("img");

  avatar.src = avatar_url;
}

export function renderRepo(filterRepo) {
  const repoList = document.querySelector("main > ul");

  // Creating a loop for each repository
  filterRepo.forEach(repo => {
    // Create a new list item element and append it to list.
    const createListItem = document.createElement("li");
    repoList.appendChild(createListItem);

    const repoLink = document.createElement("a");
    // repoLink.setAttribute('href', `projects/#${repo.name}`);
    createListItem.appendChild(repoLink);

    const repoTitle = document.createElement("h2");
    repoTitle.textContent = repo.name;
    createListItem.appendChild(repoTitle);

    const repoDescription = document.createElement("p")
    repoDescription.textContent = repo.description;
    createListItem.appendChild(repoDescription);

    const repoLanguage = document.createElement("div")
    repoLanguage.textContent = repo.language;
    repoLanguage.setAttribute('data-language', repo.language);
    createListItem.appendChild(repoLanguage);
  });
}