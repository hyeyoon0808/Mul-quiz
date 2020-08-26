import React, { Component } from "react";
import { Item } from "semantic-ui-react";
import styled from "styled-components";
import classNames from "classnames";
import { MdDelete } from "react-icons/md";

const ListItems = styled.div`
  .ListItem {
    width: 100%;
    height: auto;
    font-size: 10px;
  }
  .checked {
    box-shadow: 0px 0px 10px #afafaf;
    background: rgb(234, 244, 252);
  }
  .svgBox {
    width: 30px;
    float: left;
    height: 90%;
  }
  svg {
    font-size: 25px;
    cursor: pointer;
    color: #58e2b6;
    float: left;
    position: relative;
    bottom: -125px;
    left: 0;
    margin: 0 5px;
    &:hover {
      color: #ff7b7c;
    }
  }
  .boxItem {
    overflow: hidden;
    height: 170px;
    padding: 5px 10px;
    border-radius: 10px;
    background: #f2f2f2;
    &:hover {
      border: 2px solid #000;
    }
    position: relative;
  }
  .boxItemCheck {
    overflow: hidden;
    height: 170px;
    padding: 5px 10px;
    border-radius: 10px;
    background: #fff;
    &:hover {
      border: 2px solid #000;
    }
    position: relative;
  }
  .checkedBox {
    border: 4px solid #d9d9d9;
  }
  .imgBox {
    width: 40%;
    height: 50px;
    border: 2px dotted #a9a5a5;
    border-radius: 10px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .checkBarForm {
    overflow: hidden;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 3%;
  }
  .checkBar {
    width: 46%;
    margin: 1% 2%;
    height: 20px;
    border: 1px solid #a9a5a5;
    box-sizing: border-box;
    float: left;
    list-style: none;
    border-radius: 5px;
  }
`;

class Quizitem extends Component {
  render() {
    const selectItem = {
      padding: "15px 25px 15px 0",
    };
    const titleItem = {
      display: "block",
      paddingLeft: "20px",
      fontSize: "16px",
      marginBottom: "5px",
    };
    const boxTitleItem = {
      display: "block",
      textAlign: "center",
      fontSize: "13px",
      cursor: "default",
      color: "#666",
    };
    const {
      index,
      quiz,
      onRemove,
      onSelect,
      onItemMouseOver,
      hoverquiz,
      onremoveNext
    } = this.props;
    return (
      <ListItems>
        {quiz.default ? (
          <Item.Group className={classNames("ListItem", "checked")}>
          <Item
            style={selectItem}
            onClick={() => {
              onSelect(quiz);
            }}
          >
            <Item.Content>
              <Item.Header as="a" style={titleItem}>
                {index}번 Quiz
              </Item.Header>
              <MdDelete onClick={() => onRemove()}>제거</MdDelete>
              <div className={classNames("boxItemCheck", "checkedBox")}>
                <Item.Header as="a" style={boxTitleItem}>
                  {quiz.title}
                </Item.Header>
                <div className={"imgBox"}></div>
                <ul className={"checkBarForm"}>
                  <li className={"checkBar"}></li>
                  <li className={"checkBar"}></li>
                  <li className={"checkBar"}></li>
                  <li className={"checkBar"}></li>
                </ul>
              </div>
            </Item.Content>
          </Item>
        </Item.Group>
        ) : quiz.selectCheck ? (
          <Item.Group className={classNames("ListItem", "checked")}>
            <Item
              style={selectItem}
              onClick={() => {
                onSelect(quiz);
              }}
            >
              <Item.Content>
                <Item.Header as="a" style={titleItem}>
                  {index}번 Quiz
                </Item.Header>
                <MdDelete onClick={() => onRemove()}>제거</MdDelete>
                <div className={classNames("boxItemCheck", "checkedBox")}>
                  <Item.Header as="a" style={boxTitleItem}>
                    {quiz.title}
                  </Item.Header>
                  <div className={"imgBox"}></div>
                  <ul className={"checkBarForm"}>
                    <li className={"checkBar"}></li>
                    <li className={"checkBar"}></li>
                    <li className={"checkBar"}></li>
                    <li className={"checkBar"}></li>
                  </ul>
                </div>
              </Item.Content>
            </Item>
          </Item.Group>
        ) : (
          <Item.Group className={classNames("ListItem")}>
            <Item
              style={selectItem}
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
                <Item.Header as="a" style={titleItem}>
                  {index}번 Quiz
                </Item.Header>
                {hoverquiz === quiz ? (
                  <div className={"svgBox"}>
                    {/*<MdDelete  onClick={() => onRemove()}>제거</MdDelete>*/}
                  </div>
                ) : (
                  <div className={"svgBox"}></div>
                )}
                <div className={"boxItem"}>
                  <Item.Header as="a" style={boxTitleItem}>
                    {quiz.title}
                  </Item.Header>
                  <div className={"imgBox"}></div>
                  <ul className={"checkBarForm"}>
                    <li className={"checkBar"}></li>
                    <li className={"checkBar"}></li>
                    <li className={"checkBar"}></li>
                    <li className={"checkBar"}></li>
                  </ul>
                </div>
              </Item.Content>
            </Item>
          </Item.Group>
        )}
      </ListItems>
            
    );
  }
}

export default Quizitem;
