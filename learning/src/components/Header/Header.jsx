import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    const {
      headers = [],
      displayLoginButton,
      lessons,
      handleLessonChange,
    } = this.props;
    return (
      <div className="Header__header container">
        <div className="row">
          <div className="col-6">
            <div className="Header__header-item float-start">
              <Link to={"home"}>Home</Link>
            </div>
            {[...lessons, ...headers].map((header, i) => {
              return (
                <div
                  key={header + i}
                  className="Header__header-item float-start"
                  // onClick={() => handleLessonChange(i, header)}
                >
                  
                  <Link to={(header || "").toLowerCase().replaceAll(" ", "-")}>{header}</Link>
                </div>
              );
            })}
          </div>
        
          <div className="col-6">
            <div className="d-flex justify-content-end" style={{ width: "100%" }}>
              {displayLoginButton && (
                // <div className="btn btn-primary ">
                  <Link className="btn btn-primary" to={"login"}>Login</Link>
                // </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
