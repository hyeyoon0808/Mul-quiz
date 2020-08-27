import React, { Component } from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import UserAns from "../Material/UserAns";
import Timeout from "../Material/Timeout";

class Quizstart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({ on: !this.state.on });
  };

  handleClick = (value, e) => {
    setTimeout(this.toggle, value * 1000);
    console.log(value);
  };

  render() {
    const {
      quiz,
      quizs,
      setQuiz,
      totalScore,
      onTotalScore,
      onNextQuiz,
      nextQuiz,
    } = this.props;
    //quiz : getselectquiz
    const middleForm = {
      margin: "40px 0",
      overflow: "hidden",
    };

    const imgForm = {
      width: "50%",
      display: "flex",
      boxShadow: "2px 2px 8px 2px #ececec",
      border: "4px dotted #adadad",
      borderRadius: "20px",
      padding: "20px",
      float: "left",
    };
    const imgcenterBox = {
      width: "100%",
      height: "400px",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px",
    };
    const quizImg = {
      width: "100%",
      margin: "0 auto",
      backgroundSize: "cover",
    };
    const doneHeader = {
      height: "120px",
      boxSizing: "borderBox",
      display: "flex",
      alignItems: "center",
      margin: "30px 0",
      borderRadius: "20px",
    };
    const styleHeader = {
      width: "100%",
      color: "#666",
      fontSize: "40px",
    };
    const myGrid = {
      width: "25%",
      height: "448px",
      float: "left",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    const myForm = {
      textAlign: "center",
    };
    const myPointTxt = {
      fontSize: "30px",
      color: "#444",
    };
    const myPoint = {
      color: "#f50057",
      fontWeight: "bold",
      fontSize: "60px",
    };

    return (
      <div>
        <Segment style={doneHeader}>
          <Header as="h1" textAlign="center" style={styleHeader}>
            {quiz.title}
          </Header>
        </Segment>

        <div style={middleForm}>
          <div style={myGrid}>
            <div style={myForm}>
              <Timeout quiz={quiz} quizs={quizs} />
            </div>
          </div>

          <div style={imgForm}>
            <div style={imgcenterBox}>
              <Image src={quiz.imgUrl} style={quizImg} />
            </div>
          </div>

          <div style={myGrid}>
            <div style={myForm}>
              <p style={myPointTxt}>Your POINT</p>
              <div style={myPoint}>
                {quiz.point} / {totalScore}
              </div>
            </div>
          </div>
        </div>
        <div>
          <UserAns
            quiz={quiz}
            quizs={quizs}
            setQuiz={setQuiz}
            onTotalScore={onTotalScore}
            onNextQuiz={onNextQuiz}
            totalScore={totalScore}
            nextQuiz={nextQuiz}
          />
        </div>
      </div>
    );
  }
}

export default Quizstart;
