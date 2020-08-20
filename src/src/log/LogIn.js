import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from './palette';

//* 회원가입 또는 로그인 폼을 보여줍니다.

const AuthFormBlock = styled.div`
 h3 {
   margin: 0;
   color: ${palette.gray[8]};
   margin-bottom: 1rem;
 }
 .labelText{
   font-weight:bold;
   color:#1e70bf;
   font-size:20px;
   margin:20px 0 15px;
   display:block;
 }
`;

//* 스타일링된 input
const StyledInput = styled.input`
 font-size: 1rem;
 display:block;
 height:50px;
 border: none;
 padding-left:20px;
 padding-bottom: 0.5rem;
 outline: none;
 width: 100%;
 box-shadow: 4px 3px 6px 0px #c9caf1;
 border-radius:20px;
 &:focus {
   background-color:#fff;
   color: $oc-teal-7;
 }
 & + & {
   margin-top: 1rem;
 }
`;

//* 폼 하단에 로그인 혹은 회원가입 링크를 보여줌

const Footer = styled.div`
 font-weight:600;
 margin-top: 2rem;
 text-align: right;
 a {
   color: ${palette.gray[6]};
   text-decoration: underline;
   text-underline-position: under;
   &:hover {
     color: ${palette.gray[9]};
   }
 }
`;

const ButtonWithMarginTop = styled.button`
    width:100%;
    line-height:50px;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    margin-top: 60px;
    background:#61caa9;

    &:hover{
        background:#a1dba8;
    }
`;

//* 에러를 보여줍니다

const ErrorMessage = styled.div`
 color: red;
 text-align: center;
 font-size: 0.875rem;
 margin-top: 1rem;
 font-weight:600;
`;

class logIn extends Component {

    render() {
        const {
          onChangeId,
          onChangePw,
          error,
          onSubmitLog,
        } = this.props;
        return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form onSubmit={(e) => onSubmitLog(e.preventDefault())}>
        <label for="username" className="labelText">ID</label>
        <StyledInput
          name="username"
          placeholder="아이디를 입력하세요"
          onChange={(e) => onChangeId(e.target.value)}
        />
        <label for="username" className="labelText">PassWord</label>
        <StyledInput
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => onChangePw(e.target.value)}
          autocomplete="off"
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <ButtonWithMarginTop cyan fullWidth>
          로그인
        </ButtonWithMarginTop>
      </form>
      <Footer>
          <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
        );
    }
}

export default logIn;