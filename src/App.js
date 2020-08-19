import React, { Component } from "react";
import './App.scss';
import QuizPage from "./pages/QuizPage";
import LogInPage from "./pages/LogInPage";
import registerPage from "./pages/registerPage";
import MainPage from "./pages/MainPage";
import { Route } from 'react-router-dom';
import { Grid } from "semantic-ui-react";
import QuizlistContainer from "./Container/QuizlistContainer";
import QuizdetailContainer from "./Container/QuizdetailContainer";
//import QuizStartContainer from "./Container/QuizStartContainer";
import Quizstart from "./View/Quizstart";
import Nav from "./Material/Nav";
import "./App.scss";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const Wrap = styled.div``;

@inject("QuizStore")
@observer
class App extends Component {
  
  render() {
    return (
      <>
      <Route component={MainPage} path="/" exact={true} />
      <Route component={LogInPage} path="/Login" />
      <Route component={registerPage} path="/register" />
      <Route component={QuizPage} path="/Quiz" />
      </>
    );
  }
}

export default App;
