import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogIn from './LogIn';
import logLogo from '../image/logLogo.png'

// * 회원가입 / 로그인 페이지의 레이아웃을 담당하는 컴포넌트.
/* 화면 전체를 채움 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background:#c6ecca;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size:30px;
    .logoForm{
      margin:0 auto;
      width:40%;
      display:block;
      .logoImg{
        width:100%;
      }
    }
  }
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
  padding:50px 30px;
  width: 550px;
  background: white;
  border-radius: 10px;
  box-sizing:border-box;
`;

class LogTemplate extends Component {
    render() {
      const { 
        history,
        setlogin,
        onChangePw,
        onChangeId,
        error,
        onSubmitLog,
      } = this.props;
        return (
            <AuthTemplateBlock>
                <WhiteBox>
                    <div className="logo-area">
                        <Link to="/" className={"logoForm"}>
                          <img src={logLogo} alt={"loginLogo"} className={"logoImg"}/>
                        </Link>
                    </div>
                    <LogIn 
                      history={history} 
                      setlogin={setlogin}
                      onChangePw={onChangePw}
                      onChangeId={onChangeId}
                      error={error}
                      onSubmitLog={onSubmitLog}
                    />
                </WhiteBox>
            </AuthTemplateBlock>
        );
    }
}

export default LogTemplate;