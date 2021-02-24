import React, { Component } from "react";
import "./App.css";
// first render the state dummy data on the UI
// then use form group to add a new project
// to proejct list
class App extends Component {
  state = {
    name: "",
    tech: "",
    projectList: [
      { name: "TodoList", tech: "python" },
      { name: "Chess", tech: "JS" }
    ]
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAdd = () => {
    const newProject = {
      name: this.state.name,
      tech: this.state.tech
    };
    this.setState({
      projectList: [...this.state.projectList, newProject]
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="App">
              <h2 className="header">My Projects</h2>
              <span>Create New Project</span>

              <div className="container">
                <form className="form">
                  <div class="form-group">
                    <input
                      value={this.state.name}
                      onChange={this.handleChange}
                      name="name"
                      type="text"
                      className="form-control"
                      placeHolder="Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      value={this.state.tech}
                      onChange={this.handleChange}
                      type="text"
                      name="tech"
                      className="form-control"
                      placeHolder="Tech"
                    />
                  </div>
                  <button
                    onClick={this.handleAdd}
                    type="button"
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                </form>
              </div>
              <h5>Projects List</h5>
              <table>
                <th> Name </th>
                <th> Tech </th>
                <tbody>
                  {this.state.projectList.map((list) => (
                    <tr>
                      <td>{list.name}</td>
                      <td>{list.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
