import React, { Component } from 'react';
import Nav from '../main/Nav';
import Content from '../main/Content'
import {inject,observer} from "mobx-react"

@inject("QuizStore")

@observer
class NavContainer extends Component {
    onLoginClick = () =>{
        this.props.QuizStore.login = false;
    }
    render() {
        const login = this.props.QuizStore.login;
        return (
            <>
                <Nav login={login} onLoginClick={this.onLoginClick} />
                <Content login={login} />
            </>
        )
    }
}

export default NavContainer;