import githubClient from "./github-client";

// export async function createFavorite(data) {
//   const {...favorite} = await githubClient("/favorites", {body: data})
//   return favorite
// }

export function createFavorite(data) {
  return githubClient("/favorites", { body: data });
}

export async function getFavorites() {
  const {...favorites} = await githubClient("/favorites")
  return favorites
}

export async function deleteFavorite(id) {
  await githubClient("/favorites/" + id , {method: "DELETE"});
}

// console.log(getFavorites())
