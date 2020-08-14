import React, { Component } from 'react';
import Detailanswer from '../View/Detailanswer';
import { inject, observer } from 'mobx-react';

@inject('QuizStore')
@observer
class DetailanswerContainer extends Component {
    render() {
        const quiz = this.props.QuizStore.getselectquiz
        return (
            <div>
                <Detailanswer quiz={quiz}/>
            </div>
        );
    }
}

export default DetailanswerContainer;