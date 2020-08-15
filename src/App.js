import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import QuizlistContainer from "./Container/QuizlistContainer";
import QuizdetailContainer from "./Container/QuizdetailContainer";
import Nav from './Material/Nav';
import './App.scss';

class App extends Component {

  render() {
    const tempStyle = {padding:"0"}
    return (
      <>
        <Nav />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={3} style={tempStyle} >
              <QuizlistContainer />
            </Grid.Column>
            <Grid.Column width={13}>
              <QuizdetailContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default App;