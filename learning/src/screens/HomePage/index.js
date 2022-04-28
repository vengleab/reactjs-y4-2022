import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const DISPLAY_LENGTH = 150;


export default class HomePage extends React.Component {
  state = {};

  async componentDidMount() {
    const res = await axios.get("http://localhost:8080/articles");
    console.log({ res });
    this.setState({ articles: res.data.result });
  }

  render() {
    const { articles = [] } = this.state;
    return (
      <div className="container">
        <div className="row">
          {articles.sort((a, b) => a.id  - b.id).map((article) => {
            return (
              <div className="col-3">
                <div
                  className="card"
                  style={{ height: "300px", margin: "16px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">
                      {article.content?.length > DISPLAY_LENGTH
                        ? article.content.slice(0, DISPLAY_LENGTH) + "..."
                        : article.content}
                    </p>
                    <Link to={"/article/"+article.id} class="btn btn-primary" >
                      Read
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
