import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import styled from "styled-components";
import classNames from "classname";
import { MdDelete } from "react-icons/md";

const ListItems = styled.div`
  .ListItem {
    width: 100%;
    height: auto;
    padding: 15px;
    font-size: 10px;
  }
  .checked {
    box-shadow: 0px 0px 10px #afafaf;
    background: rgb(234, 244, 252);
  }
  &:hover {
    background: #f2f2f2;
  }
  svg {
    font-size: 20px;
    cursor: pointer;
    color: #58e2b6;
    &:hover {
      color: #ff7b7c;
    }
  }
`;

class Quizitem extends Component {
  render() {
    const {
      quiz,
      onRemove,
      onSelect,
      selectquiz,
      onItemMouseOver,
      hoverquiz,
    } = this.props;

    return (
      <ListItems>
        {selectquiz === quiz ? (
          <Item.Group className={classNames("ListItem", "checked")}>
            <Item
              onClick={() => {
                onSelect(quiz);
              }}
            >
              <Item.Content>
                <Item.Header as="a">{quiz.title}</Item.Header>
                <Item.Image size="tiny" src={quiz.imgUrl} />
                {/* <Item.Meta>Description</Item.Meta> */}
                <Item.Description>
                  {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
                </Item.Description>
                <MdDelete onClick={() => onRemove()}>제거</MdDelete>
              </Item.Content>
            </Item>
          </Item.Group>
        ) : (
          <Item.Group className={classNames("ListItem")}>
            <Item
              onClick={() => {
                onSelect(quiz);
              }}
              onMouseEnter={() => {
                onItemMouseOver(quiz);
              }}
              onMouseLeave={() => {
                onItemMouseOver(false);
              }}
            >
              <Item.Content>
                <Item.Header as="a">{quiz.title}</Item.Header>
                <Item.Image size="tiny" src={quiz.imgUrl} />
                {/* <Item.Meta>Description</Item.Meta> */}
                <Item.Description>
                  {/* <Image src='/images/wireframe/short-paragraph.png' /> */}
                </Item.Description>
                {hoverquiz === quiz ? (
                  <MdDelete onClick={() => onRemove()}>제거</MdDelete>
                ) : (
                  ""
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        )}
      </ListItems>
    );
  }
}

export default Quizitem;
