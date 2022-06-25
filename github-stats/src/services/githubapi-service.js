const BASE_URI = "https://api.github.com/users/";

export async function getGithubUser(query) {
  // const response = await fetch(BASE_URI + query.toLowerCase())
  // const data = await response.json();
  // return data;
  return fetch(BASE_URI + query.toLowerCase()).then((response) =>
    response.json()
  );
}