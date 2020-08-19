import React, { Component } from "react";
import Quizitem from "./Quizitem";
import { ItemGroup } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import Add from "../Material/Add";

const MapList = styled.div`
  box-shadow: 0px 0px 4px #b3b3b3;
  height: 100%;
  overflow: scroll;
  .center {
    display: block;
    margin: 0 auto;
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
    } = this.props;

    const quizlist = quizs.map((quiz, index) => (
      <Quizitem
        id={index + 1}
        quiz={quiz}
        onRemove={onRemove}
        onSelect={onSelect}
        onAddQuiz={onAddQuiz}
        selectquiz={selectquiz}
        onItemMouseOver={onItemMouseOver}
        hoverquiz={hoverquiz}
      />
    ));

    return (
      <MapList>
        <ItemGroup>{quizlist}</ItemGroup>

        <Add onAddQuiz={onAddQuiz} />
      </MapList>
    );
  }
}

export default Quizlist;
