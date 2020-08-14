import React, { Component } from 'react';
import {Item} from "semantic-ui-react"
import QuizlistContainer from '../Container/QuizlistContainer';

class Quizitem extends Component {
    render() {
        const {quiz ,onRemove, onSelect} = this.props;
        return (
            <div>
                <Item.Group>
                    <Item onClick={() => onSelect(quiz)}>
                    <Item.Image size='tiny' src={quiz.imgUrl} />

                    <Item.Content>
                        <Item.Header as='a'>{quiz.title}</Item.Header>
                        {/* <Item.Meta>Description</Item.Meta> */}
                        <Item.Description>
                    {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
                        <p>{quiz.price}</p>
                        </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                    
                    <button onClick={() => onRemove()}>제거</button>
                </Item.Content>
                </Item>
                </Item.Group>
            </div>
        );
    }
}

export default Quizitem;