import React, { Component } from 'react';
import Quizitem from "./Quizitem"
import {ItemGroup} from "semantic-ui-react"
import styled from 'styled-components';


const MapList = styled.div`
`

class Quizlist extends Component {
    render() {
        const {
            quizs,
            onRemove ,
            onSelect, 
            onAddQuiz,
            selectquiz,
            onItemMouseOver,
            hoverquiz
        } = this.props;
        const quizlist = quizs.map((quiz)=>(
            <Quizitem 
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
                <button onClick={() => onAddQuiz()}>추가</button>
            </MapList>
        );
    }
}

export default Quizlist;