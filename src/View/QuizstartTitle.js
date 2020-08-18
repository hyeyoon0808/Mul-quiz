import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import styled from "styled-components";

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

class QuizstartTitle extends Component {
  render() {
    const { quiz, onSelect, selectquiz } = this.props;

    return (
      <ListItems>
        {selectquiz === quiz ? (
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">{quiz.title}</Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        ) : null}
      </ListItems>
    );
  }
}

export default QuizstartTitle;
