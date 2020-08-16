import React, { Component } from 'react';
import { Item } from "semantic-ui-react"
import styled from 'styled-components';
import classNames from 'classnames';
import {MdDelete } from 'react-icons/md';

const ListItems = styled.div`
    .ListItem{
        width:100%;
        height:150px;
        padding:10px;
    }
    .checked{
        box-shadow:0px 0px 10px #afafaf;
        background:rgb(234, 244, 252);
    }
    &:hover{background:#f2f2f2;}
    svg{
        font-size:20px;
        cursor:pointer;
        color:#58e2b6;
        &:hover{
            color:#ff7b7c;
        }
    }
    
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
            <div>
                <Item.Group>
                    <Item onClick={() => onSelect(quiz)}>
                    <Item.Image size='tiny' src={quiz.imgUrl} />

                    <Item.Content>
                        <Item.Header as='a'>{quiz.title}</Item.Header>
                        {/* <Item.Meta>Description</Item.Meta> */}
                        <Item.Description>
                    {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
                        <p>{quiz.select1}</p>
                        <p>{quiz.select2}</p>
                        <p>{quiz.select3}</p>
                        <p>{quiz.select4}</p>
                        </Item.Description>
                    <Item.Extra>add extra</Item.Extra>
                    
                    <button onClick={() => onRemove()}>제거</button>
                </Item.Content>
                </Item>
                </Item.Group>
            </div>
        );
    }
}

export default Quizitem;