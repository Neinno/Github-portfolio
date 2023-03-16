# Portfolio | Project 1

My portfolio created during the minor webdesign & development.

## Introductie
Project 1 van de minor was het maken van een portfolio. Aangezien ik nieuwe technieken had geleerd bij WAFS, en CSS to the rescue was dit een mooie kans.

## De data
De data die ik gebruik komen uit de Github rest API. Deze heb ik opgehaald met gebruik van octokit. Door gebruik te maken van deze code heb ik mij repositories kunnen ophalen:

```javascript
const { data: repositories } = await octokit.rest.repos.listForAuthenticatedUser();
```

[Rest API](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api?apiVersion=2022-11-28&tool=javascript)

Vervolges krijg ik alle repositories te zien die ik heb, dus ik heb .map en .filter gebruikt om alleen de data te krijgen die ik nodig heb:

``` javascript
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
```

Daarna kan ik de data die ik terug krijg renderen in mijn pagina.