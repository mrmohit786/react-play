import { memo } from "react";

const List = memo(({ repos, username, setUsername, fetchRepos }) => {
  if (!repos) return null;
  return (
    <div>
      <h4>Fetch GitHub Repos</h4>
      <input
        style={{ marginRight: "10px" }}
        type="text"
        value={username}
        name="github-username"
        id="github-username"
        required
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub Username"
      />
      <button disabled={!username} onClick={fetchRepos}>
        Fetch
      </button>
      {username ? (
        <p>
          <strong style={{ color: "red" }}>{username}</strong>'s GitHub Repos
        </p>
      ) : (
        <span style={{ color: "red", display: "block", fontSize: "12px" }}>
          GitHub username is required
        </span>
      )}
      <ul>
        {repos.length ? (
          repos.map((repo) => {
            return (
              <li key={repo.id}>
                <a target="_blank" href={repo.html_url} rel="noreferrer">
                  {repo.name}
                </a>
              </li>
            );
          })
        ) : (
          <p>No repos, sorry</p>
        )}
      </ul>
    </div>
  );
});

export default List;
