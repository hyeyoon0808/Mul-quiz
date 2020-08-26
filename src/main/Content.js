import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components'
import classNames from 'classnames'
import { Button } from 'semantic-ui-react'
import image from '../image/gameImg.jpg';
import { Link } from 'react-router-dom';

const Contents = styled.div`
  a{text-dacoration:0;}
  ul,li{list-style:none; padding:0; margin:0;}
    .containerForm{
        width:68.5%;
        margin:0 auto;
    }
    .content_shadow{
        padding:0;
        box-shadow:0 2px 8px -1px #d9d9d9;
        padding:20px;
        box-sizing:border-box;
    }
    .content_2{
        height:250px;
        background-image:url(${image});
        background-size:100%;
        position:relative;
        .buttonPosition{
          position:absolute;
          left:50%;
          bottom:18px;
          transform:translate(-50%,0);
        }
    }

    .newsForm{
      margin-top:10px;
      .newsList{
        text-align:left;
        padding-top:5px;
        border-bottom:1px dotted #989898;
        .listMain{
          font-weight:bold;
          text-decoration{

          }
        }
        .listSub{
          margin-bottom:10px;
        }
      }
    }
    
`
const Title = styled.div`
    font-weight:bold;
    border-bottom:1px solid #d9d9d9;
    box-shadow:0 2px 12px -1px #d9d9d9;
    line-height:50px;
    text-align:left;
    padding-left:20px;
    color:#666;
`
const DottedBox = styled.div`
    border:1px dotted #b1b1b1;
    padding:20px;
    box-sizing:border-box;
`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function CenteredGrid({ login }) {
  const classes = useStyles();

  const preparingService = () => {
    alert("서비스 준비중입니다. Create Quiz를 이용해주세요. ")
  }
  const loginMove = () => {
    alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.")
  }
  const notice = () =>{
    alert("1920 해상도가 아닌 사용자 분들께서는 Ctrl + 마우스 휠을 이용해 브라우저를 줄이시면 더욱 쾌적한 게임을 즐기실 수 있습니다. 감사합니다. ")
  }

  return (
    <Contents className={classes.root}>
      <Grid container spacing={3} className={"containerForm"}>
        <Grid item xs={3}>
          <Paper className={"classes.paper"}>
            <Title>My intersts</Title>
            <Paper className={classNames(classes.paper, "content_shadow")}>
              <DottedBox>
                <p>Create interests</p>
                <Button
                  variant="contained"
                  primary
                  disableElevation
                  className={"center"}
                  onClick={preparingService}
                >Add interests</Button>
              </DottedBox>
            </Paper>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classNames(classes.paper, "content_2")}>
            {login ?
              <Link to="/quiz">
                <Button variant="contained" className={"buttonPosition"} onClick={notice}>Create Quiz</Button>
              </Link>
              :
              <Link to="/login">
                <Button variant="contained" onClick={loginMove} className={"buttonPosition"}>Create Quiz</Button>
              </Link>
            }

          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={"classes.paper"}>
            <Title>My MulQuiz</Title>
            <Paper className={classNames(classes.paper, "content_shadow")}>
              <DottedBox>
                <p>Create your first MulQuiz using one of our templates.</p>
                {login ? 
                <Link to="/quiz">
                  <Button
                  variant="contained"
                  primary
                  disableElevation
                  className={"center"}
                  onClick={notice}
                >Create Quiz</Button>
                </Link>
                :
                <Link to="/login">
                  <Button
                  variant="contained"
                  primary
                  disableElevation
                  className={"center"}
                  onClick={loginMove}
                >Create Quiz</Button>
                </Link>
              }
              </DottedBox>
            </Paper>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={"classes.paper"}>
            <Title>Challenges in progress</Title>
            <Paper className={classNames(classes.paper, "content_shadow")}>
              <DottedBox>
                <p>Find fun learning games to play independently and challenge friends to beat your score.</p>
                <Button
                  variant="contained"
                  primary
                  disableElevation
                  className={"center"}
                  onClick={preparingService}
                >Learn more</Button>
              </DottedBox>
            </Paper>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classNames(classes.paper)}>
            <Title>What’s new</Title>
            <Paper className={classNames("newsForm", "content_shadow")}>
              <ul>
                <li className={"newsList"}>
                  <div className={"listMain"}>Learn at home: Immersive learn-to-read game Poio by MulQuiz! is now available in the U.S.</div>
                  <div className={"listSub"}>- MulQuiz! extends its learning app offerings as Poio joins educational math studio... </div>
                </li>
                <li className={"newsList"}>
                  <div className={"listMain"}>Host a MulQuiz via Skype to connect with family, friends, and colleagues</div>
                  <div className={"listSub"}>- Playing MulQuiz! online is a popular way for families, groups of friends, teachers, and company employees to connect and spend some social time together. Learn how you... </div>
                </li>
                <li className={"newsList"}>
                  <div className={"listMain"}>New feature: Add images as answers to engage pre-readers and students who struggle with text!</div>
                  <div className={"listSub"}>- As one of our top requests, you can now use images as answer alternatives. It will help...  </div>
                </li>
                <li className={"newsList"}>
                  <div className={"listMain"}>MulQuiz! offers free access to all features to support distance learning in schools closed by the coronavirus outbreak</div>
                  <div className={"listSub"}>- Schools can get free access to MulQuiz! Premium to empower distance and online... </div>
                </li>
                <li className={"newsList"}>
                  <div className={"listMain"}>5 ways to play MulQuiz! challenges at home and in class</div>
                  <div className={"listSub"}>- With questions and answers on students’ devices and the ability for teachers to switch off the question timer, playing MulQuiz! as a challenge increases focus, promotes ... </div>
                </li>
              </ul>
            </Paper>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper className={"classes.paper"}>
            <Title>Latest reports</Title>
            <Paper className={classNames(classes.paper, "content_shadow")}>
              <DottedBox>
                <p>Host your first MulQuiz to see reports here.</p>
                <Button
                  variant="contained"
                  primary
                  disableElevation
                  className={"center"}
                  onClick={preparingService}
                >Host MulQuiz</Button>
              </DottedBox>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Contents>
  );
}
