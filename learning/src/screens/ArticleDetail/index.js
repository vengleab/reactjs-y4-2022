import React from "react";

export default class ArticleDetail extends React.Component {


  render() {
    const { params } = this.props;
    return (
      <div>Article id: {params?.params?.articleId}</div>
    )
  }
}