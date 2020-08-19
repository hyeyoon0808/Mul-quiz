import React, { Component } from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import UserAns from "../Material/UserAns";
import { Hidden } from "@material-ui/core";

class Quizstart extends Component {
  render() {
    const { quiz, setQuiz } = this.props;

    const imgForm = {
      width: "100%",
      overflow: " hidden",
      padding:"50px 0"
    };
    const imgcenterBox = {
      width: "50%",
      height: "300px",
      margin: "0 auto",
      overflow: "hidden",
      border: "1px solid #000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    const quizImg = {
      width: "100%",
      margin: "0 auto",
      backgroundSize: "cover",
    };
    const textForm={marginTop:"20px"}
    const styleHeader = {
      width: "100%",
      lineHeight: "80px",
    };
    return (
      <div>
        <Segment style={textForm}>
          <Header as="h1" textAlign="center" style={styleHeader}>
            {quiz.title}
          </Header>
        </Segment>

        <div style={imgForm}>
          <div style={imgcenterBox}>
            <Image src={quiz.imgUrl} style={quizImg} />
          </div>
        </div>

        <div>
          <UserAns quiz={quiz} setQuiz={setQuiz} />
        </div>
      </div>
    );
  }
}

export default Quizstart;