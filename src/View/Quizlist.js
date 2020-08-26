import React, { Component } from "react";
import Quizitem from "./Quizitem";
import { ItemGroup } from "semantic-ui-react";
import styled from "styled-components";
import Add from "../Material/Add";
import Import from "../Material/Import";

const MapList = styled.div`
  box-shadow: 0px 0px 4px #b3b3b3;
  height: 100%;
  overflow: scroll;
  .center {
    display: block;
    margin: 0 auto;
  }
  .import > button {
    margin-top: 20px;
    width:80%;
    font-size:16px;
  }
`;

class Quizlist extends Component {
  render() {
    const {
      quizs,
      onRemove,
      onSelect,
      onAddQuiz,
      selectquiz,
      onItemMouseOver,
      hoverquiz,
      gamestart
    } = this.props;

    const quizlist = quizs.map((quiz, index) => (
      <Quizitem
        index={index + 1}
        quiz={quiz}
        onRemove={onRemove}
        onSelect={onSelect}
        onAddQuiz={onAddQuiz}
        selectquiz={selectquiz}
        onItemMouseOver={onItemMouseOver}
        hoverquiz={hoverquiz}
        gamestart={gamestart}
      />
    ));

    return (
      <MapList>
        <ItemGroup>{quizlist}</ItemGroup>
        {gamestart && true ? "" : <Add onAddQuiz={onAddQuiz} />}
      
        <div className={"import"}>
          <Import />
        </div>
      </MapList>
    );
  }
}

export default Quizlist;
