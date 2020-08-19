import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import DetailinputContainer from "../Container/DetailinputContainer";
import DetailtextContainer from "../Container/DetailtextContainer";
import DetailanswerContainer from "../Container/DetailanswerContainer";
import styled from "styled-components";

const QuizInputForm = styled.div`
  .rowForm{position:relative; margin:50px 0;}
  .rowForm>div:nth-of-type(1){
    width:94%;
    margin:0 auto;
  }
`

class Quizdetail extends Component {
  render() {
    const { onModify } = this.props;
    const marginRemove = {
      margin: "0",
    };

    return (
      <QuizInputForm>
        <Grid style={marginRemove}>
          <Grid.Row>
            <Grid.Column>
              <DetailtextContainer />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row className={"rowForm"} >
            <DetailinputContainer />
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <DetailanswerContainer />
            </Grid.Column>
          </Grid.Row>

          <Button primary onClick={onModify}>
            수정하기
          </Button>
        </Grid>
      </QuizInputForm>
    );
  }
}

export default Quizdetail;
