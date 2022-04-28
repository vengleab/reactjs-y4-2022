import React from "react";

export default class PostArticle extends React.Component {
  render() {
    return (
      <form>
        <h1>Post new article</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <input
            className="form-control"
            id="content"
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
