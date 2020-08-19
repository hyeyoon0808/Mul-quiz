import React, { Component } from 'react';
import LoginContainer from '../Container/LoginContainer'
import { observer } from 'mobx-react';
import {inject} from "mobx-react"

@inject("QuizStore")
@observer
class LogInPage extends Component {

    setLog = (value)=>{
        this.props.QuizStore.setlogin(value);
    }

    render() {
        const login = this.props.QuizStore.getlogin;
        
        

        return <LoginContainer history={this.props.history} login={login} setlogin={this.setLog}/>
    }
}

export default LogInPage;