import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../log/palette';
import logLogo from '../image/logLogo.png'


//회원가입 폼
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
  box-shadow:2px 2px 10px rgba(0,0,0,0.2);
  padding:50px 30px;
  width: 550px;
  overflow:hidden;
  background: white;
  border-radius: 10px;
  box-sizing:border-box;
`;

//회원가입 내용
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

class registerPage extends Component {
    render() {
        return (
            <AuthTemplateBlock>
                <WhiteBox>
                    <div className="logo-area">
                      <Link to="/" className={"logoForm"}>
                          <img src={logLogo} alt={"loginLogo"} className={"logoImg"}/>
                        </Link>
                    </div>
                    <AuthFormBlock>
                        <h3>회원가입</h3>
                        <form>
                            <label for="username" className="labelText">ID</label>
                            <StyledInput
                                name="username"
                                placeholder="아이디를 입력하세요"
                            />
                            <label for="password" className="labelText">PassWord</label>
                            <StyledInput
                                type="password"
                                name="password"
                                placeholder="비밀번호를 입력하세요"
                            />
                            <label for="passwordConfirm" className="labelText">비밀번호 확인</label>
                            <StyledInput
                                autoComplete="new-password"
                                name="passwordConfirm"
                                placeholder="비밀번호 확인"
                                type="password"
                            />
                            <ButtonWithMarginTop cyan fullWidth>
                                회원가입
                            </ButtonWithMarginTop>
                        </form>
                        <Footer>
                            <Link to="/login">로그인</Link>
                        </Footer>
                    </AuthFormBlock>
                </WhiteBox>
            </AuthTemplateBlock>
        );
    }
}

export default registerPage;