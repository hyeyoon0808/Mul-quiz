import React, { Component } from 'react';
import { Form, TextArea,Grid, GridRow } from 'semantic-ui-react'
class Detailanswer extends Component {
    render() {
        const {quiz,setQuiz} = this.props
        return (
        <Grid columns={2} divided>
    
            <GridRow>
        <Grid.Column>
            <TextArea placeholder='Tell us more' 
            value={quiz && quiz.select1 ? quiz.select1 : ""}
            onChange={(e) => setQuiz("select1", e.target.value)}/>
        </Grid.Column>
        <Grid.Column>
            <TextArea placeholder='Tell us more' 
            value={quiz && quiz.select2 ? quiz.select2 : ""}
            onChange={(e) => setQuiz("select2", e.target.value)}/>
        </Grid.Column>
        </GridRow>

        <GridRow>
        <Grid.Column>
            <TextArea placeholder='Tell us more' 
            value={quiz && quiz.select3 ? quiz.select3 : ""}
            onChange={(e) => setQuiz("select3", e.target.value)}/>
        </Grid.Column>
        <Grid.Column>
            <TextArea placeholder='Tell us more' 
            value={quiz && quiz.select4 ? quiz.select4 : ""}
            onChange={(e) => setQuiz("select4", e.target.value)}/>
        </Grid.Column>
        </GridRow>
    </Grid>
            
        );
    }
}

export default Detailanswer;