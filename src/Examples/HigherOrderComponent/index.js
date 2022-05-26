import { Component } from "react";
import List from "./List";
import WithLoading from "./withLoading";

const ListWithLoading = WithLoading(List);

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      repos: [],
      username: "mrmohit786",
    };
  }

  componentDidMount() {
    this.fetchRepos();
  }

  componentDidUpdate() {
    if (!this.state.username && this.state.repos.length) {
      this.setState({ repos: [] });
    }
  }

  fetchRepos = () => {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/${this.state.username}/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
  };
  render() {
    return (
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
        setUsername={(username) => this.setState({ username })}
        username={this.state.username}
        fetchRepos={this.fetchRepos}
      />
    );
  }
}
export default HigherOrderComponent;
