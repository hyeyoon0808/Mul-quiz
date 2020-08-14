import React, { Component } from 'react';
import { Card,Feed } from 'semantic-ui-react'

class Detailanswer extends Component {
    render() {
        const {quiz} = this.props
        return (
            <Card>
                <Card.Content>
                    <Card.Header>Recent Activity</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            <Feed.Label image={quiz.imgUrl} />
                            <Feed.Content>
                                <Feed.Date content='1 day ago' />
                                <Feed.Summary>
                                    {quiz.title}
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
            </Card>
        );
    }
}

export default Detailanswer;