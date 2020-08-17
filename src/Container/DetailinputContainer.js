import React, { Component } from 'react';
import Detailinput from '../View/Detailinput';
import { inject, observer } from 'mobx-react';

@inject('QuizStore')
@observer
class DetailinputContainer extends Component {

    setQuiz=(name,value)=>{
        this.props.QuizStore.setQuizProps(name, value);
        
    }

    render() {
        const quiz = this.props.QuizStore.getselectquiz;
        return (
            <div>
                <Detailinput quiz={quiz} setQuiz={this.setQuiz}/>
            </div>
        );
    }
}

export default DetailinputContainer;