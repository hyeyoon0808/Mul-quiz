import React, { Component } from "react";
import { Grid, Divider, Form } from "semantic-ui-react";
import Sel from "../Material/Sel";
import Point from "../Material/Point";
import Time from "../Material/Time";
import styled from "styled-components";
import Upload from "../Material/Upload";

const InputForm = styled.div`
  .gridForm {
    position: relative;
  }
  .profileBox {
    margin: 30px auto;
    width: 75%;
    height: 300px;
    border: 3px dotted #adadad;
    display: flex;
  }
  .profileBox {
    margin: 30px auto;
    width: 75%;
    height: 300px;
    border: 2px dotted #d9d9d9;
  }
  .pointForm > div:nth-of-type(1) {
    width: 90%;
    margin: 0 auto;
  }
  .textTitle{
    text-align:center;
<<<<<<< HEAD
    color:#ff5656;
=======
    color:#f50057;
>>>>>>> ec5ff4338dbbce4508de0659f0f637b436521f82
  }
  .textForm{
    overflow:hidden;
    list-style:decimal;
    font-weight: bold;
    font-size:18px;
    padding-left:20px;
  }
  .texts{
    font-size:16px;
    padding-left:5px;
    margin-bottom:10px;
    line-height:20px;
<<<<<<< HEAD
    color:#666;
=======
>>>>>>> ec5ff4338dbbce4508de0659f0f637b436521f82
  }
`;

class Detailinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewURL: "",
    };
  }
  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  render() {
    const { quiz, setQuiz,quizs } = this.props;
    let profile_preview = null;
    if (this.state.file !== "") {
      profile_preview = (
        <img
          className="profile_preview"
          src={this.state.previewURL}
          alt="profile"
          width="400px"
        />
      );
    }
    const centerForm = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      boxShadow: "2px 2px 8px 2px #ececec",
      border: "4px solid #d9d9d9",
      borderRadius: "20px",
    };
    const leftForm = { width: "20%", textAlign: "center" };
    const rightForm = {
      width: "20%",
      textAlign: "left",
      position:"absolute",
      right:"0",
      top:"0",
      border: "4px solid #d9d9d9",
      padding:"20px",
      boxSizing:"borderBox",
      minWidth:"300px"

    };
    const optionFont = {
      fontWeight: "bold",
      fontSize: "16px",
      color: "#666",
    };
    return (
      <InputForm>
        <Grid columns={2} divided className="gridForm">
          <Grid.Column style={leftForm}>
            <div className="TimeForm">
              <Time quiz={quiz} quizs={quizs} setQuiz={setQuiz} />
            </div>
            <Divider />
            <div className="pointForm">
              <Point quiz={quiz} quizs={quizs} setQuiz={setQuiz} />
            </div>
            <Divider />

            <p style={optionFont}> Answer Option</p>
            <Sel quiz={quiz} />
          </Grid.Column>

          <Grid.Column style={centerForm}>
            <Form>
              <Upload />
            </Form>
          </Grid.Column>

          <Grid.Column style={rightForm}>
              <h3 className={"textTitle"}>사용방법</h3>
              <ul className={"textForm"}>
                <li className={"texts"}>Add question을 통해 퀴즈를 생성합니다.</li>
                <li className={"texts"}>제목, 시간, 포인트, 문제 설정을 해줍니다.</li>
                <li className={"texts"}>설정이 완료 되었으면 save를 반드시 해줍니다.</li>
                <li className={"texts"}>Done 버튼을 눌러 Quiz 실행 화면으로 이동합니다..</li>
                <li className={"texts"}>start Quiz Modal 버튼을 누르면 설정한 타이머가 작동합니다.</li>
                <li className={"texts"}>즐겁게 사용해주시면 됩니다.</li>
              </ul>
          </Grid.Column>
        </Grid>
      </InputForm>
    );
  }
}

export default Detailinput;
