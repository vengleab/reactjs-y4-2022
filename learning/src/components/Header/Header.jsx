import React, { Component } from "react";
import "./header.scss";

function handleClick() {
  alert("Home");
}
export default class Header extends Component {
  handleClick(text) {
    alert(text);
  }

  // HOF - High order function
  // handleClick(text) {
  //   return function() {
  //     alert(text);
  //   }
  // }

  render() {
    // const headers = this.props.headers || [];
    // const displayLoginButton = this.props.displayLoginButton;
    const {headers = [] , displayLoginButton, lessons, handleLessonChange} = this.props;
    return (
      <div className="Header__header">
          <div className="Header__header-item float-start" >Home</div>
          {[...lessons, ...headers].map((header, i) => {
            return (
              <div key={header+i} className="Header__header-item float-start" onClick={()=> handleLessonChange(i, header)}>
                {header}
              </div>
            );
          })}
          
          {displayLoginButton && (
            <div className="btn btn-primary" sty>Login</div>
          )}
      </div>
    );
  }
}
