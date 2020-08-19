import React, { Component } from "react";
import { Grid,Divider ,Button,Select ,Form} from 'semantic-ui-react'
import Sel from "../Material/Sel"
import Point from "../Material/Point"
import Time from "../Material/Time"


class Detailinput extends Component {
  
  render() {
    
    const {quiz,setQuiz,getPost} = this.props;

    return (
      <Grid columns={2} divided>

      <Grid.Column>

      <Time quiz={quiz} setQuiz={setQuiz}/>

        <Divider />

        <Point quiz={quiz} setQuiz={setQuiz}/>
        <Divider />

    <p> Answer Option</p>
      <Sel quiz={quiz}/>
      </Grid.Column>

      <Grid.Column>
      <Form>
          <Form.Input
            type="file"
            name="imgFile"
            id="imgFile"
            onChange={(e) => setQuiz("imgUrl", e.target.value)}
          />
          <Divider />
          <Form.Button type="button" onClick={getPost} />
        </Form>

        
      </Grid.Column>
    </Grid>

    );
  }
}

export default Detailinput;
