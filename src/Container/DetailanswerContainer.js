import React, { Component } from 'react';
import Detailanswer from '../View/Detailanswer';
import { inject, observer } from 'mobx-react';

@inject('QuizStore')
@observer
class DetailanswerContainer extends Component {

    setQuiz =(name,value)=>{
        this.props.QuizStore.setQuizProps(name,value);
    }

    render() {
        const quiz = this.props.QuizStore.getselectquiz
        return (
            <div>
                <Detailanswer quiz={quiz} setQuiz={this.setQuiz}/>
            </div>
        );
    }
}

export default DetailanswerContainer;