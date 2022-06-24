import { tokenKey } from "../config";
import githubClient from "./github-client";

export async function login(credentials) {
  const {token, ...user} = await githubClient("/login", {body: credentials} )
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export function logout() {
  return githubClient("/logout", { method: "DELETE" });
}


