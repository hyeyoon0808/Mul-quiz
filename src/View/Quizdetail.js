import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import DetailinputContainer from '../Container/DetailinputContainer';
import DetailtextContainer from '../Container/DetailtextContainer';
import DetailanswerContainer from '../Container/DetailanswerContainer';

class Quizdetail extends Component {
    render() {
        const marginRemove={
            margin:"0",
        }
        const { quiz } = this.props;
        return (
            <Grid columns='three' divided style={marginRemove}>
                <Grid.Row>
                    <Grid.Column>
                        < DetailtextContainer />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        < DetailinputContainer />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        < DetailanswerContainer />
                    </Grid.Column>
                </Grid.Row>


            </Grid>
        );
    }
}

export default Quizdetail;