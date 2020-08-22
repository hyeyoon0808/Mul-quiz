import React, { Component } from 'react';
import Tex from "../Material/Tex";

class Detailtext extends Component {
    render() {
        const {quiz,setQuiz} = this.props;
        
        return (
            <Tex quiz={quiz} setQuiz={setQuiz}/>
        );
    }
}

export default Detailtext;
