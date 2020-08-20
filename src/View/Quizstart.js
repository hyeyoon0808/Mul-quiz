import React, { Component } from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import UserAns from "../Material/UserAns";
import { Hidden } from "@material-ui/core";
import ReactTimeout from "react-timeout";
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
    const { quiz, setQuiz } = this.props;
    
    const imgForm = {
      width: "100%",
      overflow: " hidden",
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

    const styleHeader = {
      width: "100%",
      lineHeight: "80px",
    };

    const time = {
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      background: "green",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  

    return (
      <div>
        <Segment>
          <Header as="h1" textAlign="center" style={styleHeader}>
            {quiz.title}
          </Header>
        </Segment>  
          <Timeout quiz={quiz}/>

        <div>
          <div>
            <div style={imgForm}>
              <div style={imgcenterBox}>
                <Image src={quiz.imgUrl} style={quizImg} />
              </div>
            </div>
          </div>
          <div>
            <p>Your POINT</p>
            {quiz.point}
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