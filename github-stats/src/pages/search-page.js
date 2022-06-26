import React, { useEffect, useState } from 'react'
import GithubUserData from '../components/githubUser-data';
import Input from '../components/input';
import { getGithubUser } from '../services/githubapi-service';


function SearchPage() {
  const [query, setQuery] = useState("");
  const [githubUser, setGithubUser] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    getGithubUser(query)
        .then(setGithubUser)
        .catch(console.log);
      }
 
  function handleAddFavorite(e) {
    const data = {
        name: githubUser.name,
        username: githubUser["login"],
        avatar_url: githubUser["avatar_url"]
    }

    createFavorite(data).then((newfav => setFavorites([...favorites, newfav])))
                        .catch(console.log);


  return (
    <form onSubmit={handleSubmit}>
      <Input 
        name="query"
        value={query}
        placeholder="Username"
        onChange={(e)=> setQuery(e.target.value)}
      />
      <button>Search</button>
      <div>
        { !githubUser && "No users" }
        { githubUser && !githubUser.message && <GithubUserData githubUser={githubUser}/>}
        { githubUser && githubUser.message && <p>{githubUser.message}</p> }
      </div>
    </form>
  )
}

export default SearchPage;