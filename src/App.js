import React, { Component } from 'react';
import { Grid} from 'semantic-ui-react';
import QuizlistContainer from "./Container/QuizlistContainer";
import QuizdetailContainer from "./Container/QuizdetailContainer";

class App extends Component {

  render() {
    return (
      
      <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column width={3}>
          <QuizlistContainer />
        </Grid.Column>
        <Grid.Column>
          <QuizdetailContainer />
        </Grid.Column>
        
      </Grid.Row>

    </Grid>
    
    );
  }
}

export default App;