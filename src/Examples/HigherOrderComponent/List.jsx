import { memo } from "react";

const List = memo(({ repos }) => {
  if (!repos) return null;
  return (
    <div>
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
