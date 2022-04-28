import axios from "axios";
import React from "react";
import LoginForm from "../../components/LoginForm";

export default class AuthContainer extends React.Component {
  state = { isLogin: false }

  async componentDidMount() {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth`, { token})
      this.setState({ isLogin: true })
    } catch (error) {
      
    }
  }

  render() {
    const { isLogin } = this.state;
    if(isLogin) {
      return this.props.children;
    } else {
      return <LoginForm />
    }
  }
}