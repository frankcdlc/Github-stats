import React, { useEffect, useState } from 'react'
import GithubUserData from '../components/githubUser-data';
import Input from '../components/input';
import { createFavorite, deleteFavorite } from '../services/favorites-services';
import { getGithubUser } from '../services/githubapi-service';

function SearchPage() {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([])
  const [githubUser, setGithubUser] = useState(null);

  const isFavorite = favorites.find((fav)=> fav.username === githubUser?.login);
  console.log(isFavorite)
  console.log(githubUser?.id)

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


  }

  function handleRemovefavorite() {
    const favorite = favorites.find((fav)=> fav.username === githubUser.login)
    deleteFavorite(favorite.id).then(()=> {
      const newFavorites = favorites.filter((fav)=> fav.username !== githubUser.login );
      setFavorites(newFavorites)
    })
  }

  useEffect(()=>{
    console.log(favorites)
    // console.log(isFavorite)
  }, [favorites]);
 
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
        { githubUser && !githubUser.message && <GithubUserData githubUser={githubUser} onAddFavorite={handleAddFavorite} isFavorite={isFavorite} onDeleteFav={handleRemovefavorite}/>}
        { githubUser && githubUser.message && <p>{githubUser.message}</p> }
      </div>
    </form>
  )
}

export default SearchPage;