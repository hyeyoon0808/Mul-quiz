import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import QuizlistContainer from "./Container/QuizlistContainer";
import QuizdetailContainer from "./Container/QuizdetailContainer";
import Nav from './Material/Nav';
import './App.scss';
import styled from 'styled-components';

const Wrap = styled.div`
`

class App extends Component {

  render() {
    const tempStyle = {
      padding:"0px",
      height:"100%"
    }
    const marginRemove ={
      height:'100%',
      margin:"0px"
    }
    return (
      <Wrap style={tempStyle} >
        <Nav/>
        <Grid columns={2} divided  style={marginRemove} >
          <Grid.Row  style={tempStyle} >
            <Grid.Column width={3} style={tempStyle} >
              <QuizlistContainer />
            </Grid.Column>
            <Grid.Column width={13} className={"test"}>
              <QuizdetailContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Wrap>
    );
  }
}

export default App;