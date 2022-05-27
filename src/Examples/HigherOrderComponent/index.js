import axios from "axios";
import { useEffect, useState } from "react";
import useDebounce from "../Hooks/Custom/useDebounce";
import List from "./List";
import WithLoading from "./withLoading";

const ListWithLoading = WithLoading(List);

const HigherOrderComponent = () => {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);
  const handleSearch = useDebounce(() => {
    fetchRepos();
  }, 500);
  const [username, setUsername] = useState("mrmohit786");

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      setLoading(true);
      const { data } = await axios(
        `https://api.github.com/users/${username}/repos`
      );
      setRepos(data)
      setLoading(false);
    } catch (error) {
      setRepos([])
      setLoading(false);
    }
  };

  return (
    <>
    <h4>Fetch GitHub Repos</h4>
      <p>(uses Debounce concept 500ms)</p>
      <input
        style={{ marginRight: "10px" }}
        type="text"
        value={username}
        name="github-username"
        id="github-username"
        required
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub Username"
        onKeyUp={handleSearch}
      />
       {username ? (
        <p>
          <strong style={{ color: "red" }}>{username}</strong>'s GitHub Repos
        </p>
      ) : (
        <span style={{ color: "red", display: "block", fontSize: "12px" }}>
          GitHub username is required
        </span>
      )}
      <ListWithLoading
      isLoading={loading}
      repos={repos}
    />
    </>
    
  );
};
export default HigherOrderComponent;
