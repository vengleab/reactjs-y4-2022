import React, {Component} from "react";
import './header.scss'

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
    return (
      <div className="Header__header">
        <div className="Header__header-item" onClick={this.handleClick}>Home</div>
        <div className="Header__header-item" onClick={this.handleClick}>About Us</div>
        <div className="Header__header-item" >Contact Us</div>
      </div>
    )
  }
}