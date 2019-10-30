import React from "react";
import { runInThisContext } from "vm";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault()
    if(this.state.username !== "" && this.state.password !== "")
    this.props.handleLogin(this.state.username, this.state.password)
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input required onChange={this.handleChange}id="username" name="username" value={this.state.username} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input required onChange={this.handleChange} id="password" name="password" value={this.state.password} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
