import axios from "axios";
import React from "react";

class LoginForm extends React.Component {

  handleInputChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    })
  }

  async handleLogin(evt) {
    evt.preventDefault();
    const { username, password } = this.state;
    try {
      const res = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}/login`,
        method: 'POST',
        data: { username, password}
      })
      alert(res.data.message)
      await localStorage.setItem("token", res.data.result?.token)
      this.props.onLoginSuccess();
    } catch (error) {
      console.log(error)
      // alert(error.response.data.message)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin.bind(this)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            name="username"
            className="form-control"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

LoginForm.defaultProps = {
  onLoginSuccess: ()=>{}
}


export default LoginForm 