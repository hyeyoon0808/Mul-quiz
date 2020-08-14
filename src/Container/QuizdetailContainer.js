import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import Quizdetail from '../View/Quizdetail';

@inject("QuizStore")

@observer
class QuizdetailContainer extends Component {
    render() {
        const quiz = this.props.QuizStore.getselectquiz;
        return (
            <div><Quizdetail quiz={quiz} /></div>
        );
    }
}


export default QuizdetailContainer;