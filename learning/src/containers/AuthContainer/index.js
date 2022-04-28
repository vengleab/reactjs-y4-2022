import React from "react";
import LoginForm from "../../components/LoginForm";

export default class AuthContainer extends React.Component {
  state = { isLogin: false }

  render() {
    const { isLogin } = this.state;
    if(isLogin) {
      return this.props.children;
    } else {
      return <LoginForm />
    }
  }
}