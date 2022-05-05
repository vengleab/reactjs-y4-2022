import React from "react";
import axios from 'axios';
import { REACT_APP_BACKEND_URL } from '../../constants/env'
import WithRouter from "../../containers/WithRouter";

class PostArticle extends React.Component {
  state = {};
  handleInputChange = (evt) => {
    const {name, value} = evt.target;
    console.log(evt.target)
    this.setState({ [name]: value})
  }

  handlePostArticle = async (evt) => {
    evt.preventDefault()
    const { title, content } = this.state;
    await axios({
      method: 'POST',
      url: `${REACT_APP_BACKEND_URL}/articles`,
      data: {
        title,
        content
      }
    })
    this.props.navigation("/home")
  }

  render() {
    return (
      <form onSubmit={this.handlePostArticle}>
        <h1>Post new article</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            name="title"
            id="title"
            onChange={this.handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            onChange={this.handleInputChange}
            name="content"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    );
  }
}

export default (props) => <WithRouter Component={PostArticle} {...props} />