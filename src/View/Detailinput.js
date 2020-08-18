import React, { Component } from "react";
import { Grid,Divider ,Button,Select ,Form} from 'semantic-ui-react'
import Sel from "../Material/Sel"
import { makeStyles } from '@material-ui/core/styles';
import { withStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

class Detailinput extends Component {
  
  render() {
    const {classes} = this.props;

    const {quiz,setQuiz,getPost} = this.props;

    return (
      <div>
        <Button.Group widths="3">
          <Button attached="left" disabled>
            {" "}
            0{" "}
          </Button>
          <Button attached="left" active>
            {" "}
            1000{" "}
          </Button>
          <Button attached="left" disabled>
            {" "}
            2000{" "}
          </Button>
        </Button.Group>

        <Divider />

        <Form
        // style={{
        //   backgroundColor: "#efefef",
        //   width: "150px",
        //   height: "150px",
        // }}
        >
          <Form.Input
            type="file"
            name="imgFile"
            id="imgFile"
            onChange={(e) => setQuiz("imgUrl", e.target.value)}
          />
          <Form.Button type="button" onClick={getPost} />
        </Form>

        <Divider />
        <Form.Input
          label={quiz && quiz.Time ? `Time: ${quiz.Time}초 ` : `Time: 5초 `}
          min={5}
          max={30}
          onChange={(e) => setQuiz("Time", e.target.value)}
          step={1}
          type="range"
          value={quiz && quiz.Time ? quiz.Time : 5}
        />

        <Divider />

    <p> Answer Option</p>
      <Sel quiz={quiz}/>
    </div>
    );
  }
}

export default withStyles(useStyles)(Detailinput);
