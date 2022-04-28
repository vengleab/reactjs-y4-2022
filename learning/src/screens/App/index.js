import React from "react";
import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm";
import { Routes, Route, useParams } from "react-router-dom";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import Lesson from "../Lesson";
import HomePage from "../HomePage";
import { Link } from "react-router-dom";
import "./App.css";
import PostArticle from "../../components/PostArticle";
import AuthContainer from "../../containers/AuthContainer";
import ArticleDetail from "../ArticleDetail";
import WithRouter from "../../containers/WithRouter";

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <ul className="nav header">
          <li className="nav-item header-item">
            <Link to={"home"}>Home</Link>
          </li>
          <li className="nav-item header-item">
            <Link to={"post-article"}>Post articles</Link>
          </li>
          <li className="nav-item header-item">
            <Link to={"login"}>Login</Link>
          </li>
        </ul>

        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="article/:articleId" element={<WithRouter Component={ArticleDetail} />} />
          <Route path="login" element={<LoginForm />} />
          <Route
            path="post-article"
            element={
              <AuthContainer>
                <PostArticle />
              </AuthContainer>
            }
          />
          {/* <Route path="contact-us" element={<ContactUs />} /> */}
        </Routes>
      </div>
    );
  }
}
