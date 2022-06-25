import {RiStarLine} from "react-icons/ri";

function GithubUserData({githubUser}) {
  
  return (
    <div>
      <img src={githubUser.avatar_url} alt="user" />
      <div style={{display: "flex"}}>
        <h2>{githubUser.name}</h2>
        <button>
          <RiStarLine/>
        </button>
      </div>
      <p>{githubUser.bio}</p>
      <div>
        <h1>{githubUser.followers}</h1>
        <p>Followers</p>
      </div>
      <div>
        <h1>{githubUser.following}</h1>
        <p>Followings</p>
      </div>
      <div>
        <h1>{githubUser["public_repos"]}</h1>
        <p>Public repos</p>
      </div>
      <div>
      <h1>{githubUser["public_gists"]}</h1>
        <p>Public gists</p>
      </div>
    </div>
  )
}

export default GithubUserData;