import React, { Component } from 'react';
import Quizitem from "./Quizitem"
import {ItemGroup} from "semantic-ui-react"

class Quizlist extends Component {
    render() {
        const {quizs,onRemove ,onSelect, onAddQuiz} = this.props;

        const quizlist = quizs.map((quiz)=>(
            <Quizitem 
                quiz={quiz} 
                onRemove={onRemove} 
                onSelect={onSelect}
                onAddQuiz={onAddQuiz}
            />
        ));

        return (
            <div>
                <ItemGroup>{quizlist}</ItemGroup>
                <button onClick={() => onAddQuiz()}>추가</button>
            </div>
        );
    }
}

export default Quizlist;