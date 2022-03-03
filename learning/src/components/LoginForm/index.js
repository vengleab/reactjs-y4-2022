import React from "react";

export default class LoginForm extends React.Component {
  emailRef = React.createRef();

  handleChange = (e) => {
    // const { value } = e.target;
    // console.log(e.target.value);
    this.forceUpdate();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Email:',formData.get('email'));
    console.log('Text area: ', formData.get('text-area'));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              ref={this.emailRef}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              name="text-area"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>
          {
            // emailRef?.current ====> emailRef && emailRef.current
            `Email Input ----> ID: ${this.emailRef?.current?.id}, value:${this.emailRef?.current?.value}`
          }
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}
