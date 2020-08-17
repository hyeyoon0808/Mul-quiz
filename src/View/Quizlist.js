import React, { Component } from 'react';
import Quizitem from "./Quizitem"
import {ItemGroup} from "semantic-ui-react"
import {Button } from 'semantic-ui-react'
import styled from 'styled-components';


const MapList = styled.div`
    box-shadow:0px 0px 4px #b3b3b3;
    height:100%;
    overflow: scroll;
    .center{
        display:block;
        margin:0 auto;
    }
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
                <Button 
                    variant="contained"
                    primary
                    disableElevation
                    className={"center"}
                    onClick={() => onAddQuiz()}
                >Add question</Button>
            </MapList>
        );
    }
}

export default Quizlist;