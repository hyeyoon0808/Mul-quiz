import React, { Component } from 'react';
import Detailtext from '../View/Detailtext';
import {inject,observer} from "mobx-react"
@inject("QuizStore")

@observer
class DetailtextContainer extends Component {

    setQuiz =(name,value)=>{
        console.log(value);
        this.props.QuizStore.setQuizProps(name,value);
    }

    
    render() {

        const quiz=this.props.QuizStore.getselectquiz;

        return (
            <div>
                <Detailtext quiz={quiz} setQuiz={this.setQuiz}/>
            </div>
        );
    }
}

export default DetailtextContainer;