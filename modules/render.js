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
    repoLink.setAttribute('href', `#projects/#${repo.name}`);
    createListItem.appendChild(repoLink);

    const repoText = document.createElement("p");
    repoText.textContent = repo.name;
    createListItem.appendChild(repoText);
  });
}