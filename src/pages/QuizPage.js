import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import QuizlistContainer from "../Container/QuizlistContainer";
import QuizdetailContainer from "../Container/QuizdetailContainer";
import Nav from '../Material/Nav';
import './QuizPage.scss';
import styled from 'styled-components';
import {inject,observer} from "mobx-react";
import Quizstart from "../View/Quizstart";

const Wrap = styled.div``;

@inject("QuizStore")
@observer
class QuizPage extends Component {
  
start = (value) =>{
  this.props.QuizStore.setstart(value);
  }
onTotalScore = (score) => {
  this.props.QuizStore.TotalScore(score);
}
onNextQuiz = (quiz) => {
  this.props.QuizStore.nextQuiz(quiz)
}


  render() {
    const tempStyle = {
      padding:"0px",
      height:"100%"
    }
    const marginRemove ={
      height:'100%',
      margin:"0px"
    }
    const leftStyle ={
        width:"15%",
        padding:"0px",
        height:"100%"
    }
    const rightStyle ={
        width:"85%",
        background:"#eff2eb"
    }

    const gamestart = this.props.QuizStore.getgamestart;
    const quiz = this.props.QuizStore.getselectquiz;
    const quizs = this.props.QuizStore.getquizs;
    const totalScore = this.props.QuizStore.totalScore;
    

    return (
      <Wrap style={tempStyle} className={"navStyle"} >
        <Nav gamestart={gamestart} start={this.start}/>
        
          {gamestart && true ? 
          (
            <Grid columns={2} divided  style={marginRemove} >
            <Grid.Row  style={tempStyle} >
            <Grid.Column  style={leftStyle}>
              <QuizlistContainer />
            </Grid.Column>
            <Grid.Column style={rightStyle} >
              <Quizstart quiz={quiz} quizs={quizs} onTotalScore={this.onTotalScore} onNextQuiz={this.onNextQuiz} totalScore={totalScore} />
            </Grid.Column>
            </Grid.Row>
            </Grid>
            )
            :
            (
              <Grid columns={2} divided  style={marginRemove} >
            <Grid.Row  style={tempStyle} >
              <Grid.Column style={leftStyle}>
                <QuizlistContainer />
              </Grid.Column>

              <Grid.Column style={rightStyle}>
                <QuizdetailContainer />
              </Grid.Column>
              </Grid.Row>
            </Grid>)}
      </Wrap>
    );
  }
}

export default QuizPage;