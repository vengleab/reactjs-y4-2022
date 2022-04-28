import React from "react";
import axios from 'axios';

export default class ArticleDetail extends React.Component {
  state = {}

  componentDidMount() {
    const { params } = this.props;
    const { articleId } = params.params
    // const res = ;
    axios.get(`http://localhost:8080/articles/${articleId}`)
      .then(res => {
        this.setState({ article: res.data.result })
      })
    
  }


  render() {
    const { article = {} } = this.state;
    return (
      <div>
        <h1>{article.title}</h1>  
        <p>
          {article.content}
        </p>
      </div>
    )
  }
}