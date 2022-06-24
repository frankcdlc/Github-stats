import { tokenKey } from "../config";
import githubClient from "./github-client";

export async function createUser(userData) {
  const { token, ...user } = await githubClient("/signup", { body: userData });
  
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function getUser() {
  const { _token, ...user } = await githubClient("/profile");
  return user;
}

export async function updateUser(userData) {
  const { _token, ...user } = await githubClient("profile", {
    body: userData,
    method: "PATCH"
  });

  return user;
}

export async function deleteUser() {
  await githubClient("/profile", {method: "DELETE"});
    sessionStorage.removeItem(tokenKey);
}


