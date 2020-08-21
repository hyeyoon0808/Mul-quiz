import React, { Component } from 'react';
import {inject,observer} from "mobx-react"
import LogTemplate from "../log/LogTemplate";

@inject("QuizStore")

@observer
class LoginContainer extends Component {

    onChangeId = (value) => {this.props.QuizStore.changeId(value)}
    onChangePw = (value) => {this.props.QuizStore.changePw(value)}

    onSubmitLog = (preventDefault) => {
        this.props.QuizStore.preventDefault = preventDefault;
        if(this.user === this.idValue){
            if(this.props.QuizStore.passwd === this.props.QuizStore.pwValue){
                this.props.QuizStore.login = true;
                console.log(this.props.QuizStore.setlogin)
                alert("로그인이 완료되었습니다.")
                this.props.history.push("/");
            }else{
                this.props.QuizStore.error = this.props.QuizStore.error = "id , 비밀번호를 확인해 주세요."
              }
        }else{
            this.props.QuizStore.error = this.props.QuizStore.error = "id , 비밀번호를 입력해 주세요."
        }
    }
    

    render() {
        const error = this.props.QuizStore.error;
        return <LogTemplate 
            history={this.props.history}
            onChangeId={this.onChangeId}
            onChangePw={this.onChangePw}
            onSubmitLog={this.onSubmitLog}
            error={error}
        />
    }
}

export default LoginContainer;