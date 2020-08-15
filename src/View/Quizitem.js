import React, { Component } from 'react';
import { Item } from "semantic-ui-react"
import styled from 'styled-components';
import classNames from 'classnames';

const ListItems = styled.div`
    .ListItem{
        width:100%;
        height:120px;
        padding:10px;
    }
    .checked{
        box-shadow:5px 0px 10px #000;
        background:black;
    }
    &:hover{background:#f2f2f2;}
    
`

class Quizitem extends Component {
    render() {
        const {
            quiz,
            onRemove,
            onSelect,
            selectquiz,
            onItemMouseOver,
            hoverquiz
        } = this.props;

        return (
            <ListItems>
                {
                    selectquiz === quiz ?
                        <Item.Group className={classNames('ListItem', 'checked')}>
                            <Item onClick={() => { onSelect(quiz) }}>
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

                        :

                        <Item.Group className={classNames('ListItem')}>
                            <Item
                                onClick={() => { onSelect(quiz) }}
                                onMouseEnter={() => { onItemMouseOver(quiz) }}
                                onMouseLeave={() => { onItemMouseOver(false) }}
                            >
                                <Item.Image size='tiny' src={quiz.imgUrl} />

                                <Item.Content>
                                    <Item.Header as='a'>{quiz.title}</Item.Header>
                                    {/* <Item.Meta>Description</Item.Meta> */}
                                    <Item.Description>
                                        {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
                                        <p>{quiz.price}</p>
                                    </Item.Description>
                                    <Item.Extra>Additional Details</Item.Extra>
                                    {hoverquiz === quiz ? <button onClick={() => onRemove()}>제거</button> : ""}
                                </Item.Content>
                            </Item>
                        </Item.Group>
                }

            </ListItems>
        );
    }
}

export default Quizitem;