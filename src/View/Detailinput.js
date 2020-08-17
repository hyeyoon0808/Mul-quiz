import React, { Component } from "react";
import { Grid, Image } from 'semantic-ui-react'

class Detailinput extends Component {
  render() {
    return (
    <Grid columns={3} divided>
      
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Grid.Column>
    
  
    </Grid>)
  }
}

export default Detailinput;