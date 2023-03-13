export function render(repositories) {
    const repoList = document.querySelector("ul");

    // Creating a loop for each repository
    repositories.forEach(repo => {
      // Create a new list item element and append it to list.
      const createList = document.createElement("li");
      createList.textContent = repo.name;
      repoList.appendChild(createList);
    });
}