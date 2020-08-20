import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import Quizdetail from '../View/Quizdetail';

@inject("QuizStore")

@observer
class QuizdetailContainer extends Component {

    onModify=()=>{
        const quiz=this.props.QuizStore.getselectquiz;
        this.props.QuizStore.Modify(quiz);
    }

    render() {
        
        return (
            <div><Quizdetail onModify={this.onModify}/></div>
        );
    }
}


export default QuizdetailContainer;