import React, { Component } from "react";
import { Grid,Divider ,Button,Select ,Form} from 'semantic-ui-react'
import Sel from "../Material/Sel"

class Detailinput extends Component {

  
  render() {
    
    const {quiz,setQuiz} = this.props;



    return (
    
    <div>
    <Button.Group widths='3'>
    <Button attached='left' disabled> 0 </Button>
    <Button  attached='left' active > 1000 </Button>
    <Button attached='left' disabled> 2000 </Button>
    </Button.Group>

    <Divider />

    <Form.Input
              label={quiz && quiz.Time ? `Time: ${quiz.Time}초 ` : `Time: 5초 `}
              min={5}
              max={30}
              onChange={(e)=> setQuiz('Time',e.target.value)}
              step={1}
              type='range'
              value={quiz && quiz.Time ? quiz.Time : 5}
            />

    <Divider />

    <p> Answer Option</p>
      <Sel/>
    </div>
    );
  }
}

export default Detailinput;
