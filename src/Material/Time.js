import React from 'react';
import styled from 'styled-components';

const ButtonBox = styled.div`
  possition:relative;
  .hover{
    &:hover{
      background:#4f018b;
      color:#fff;
    }
  }
`

export default function UploadButtons({quiz,setQuiz,quizs}) {
  const [visible, setVisible] = React.useState(false); 

  //전체 시간초 설정
  for(var i=0; i<quizs.length; i++){
    quizs[i].time = quiz.time
  }

  const big = {
    marginBottom:'25px',
    borderRadius:'100%',
    width:'90px',
    height: '90px',
    fontWeight:'bold',
    fontSize:"16px",

    background: visible ? '#4f018b' : 'white',
    border:'0',
    boxShadow:'0px 1px 1px 0px black',
    color: visible ? '#fff' : "#666",
    transition:"all 0.5s ease-in-out"
  }

  const small = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'-12%',
    left:'42%',
    transition:"all 0.3s ease-in-out"
  }

  const small1 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'-5%',
    left:'64%',
    transition:"all 0.3s ease-in-out"
  }

  const small2 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'10%',
    left:'71%',
    transition:"all 0.3s ease-in-out"
  }

  const small3 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    left:'64%',
    top:'25%',
    transition:"all 0.3s ease-in-out"
  }

  const small4 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    left:'42%',
    top:'33%',
    transition:"all 0.3s ease-in-out"
  }

  const small5 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'26%',
    left:'21%',
    transition:"all 0.3s ease-in-out"
  }

  const small6 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'10%',
    left:'12%',
    transition:"all 0.3s ease-in-out"
  }

  const small7 = {
    position:'absolute',
    borderRadius:'100%',
    width:'45px',
    height: '45px',
    top:'-6%',
    left:'21%',
    transition:"all 0.3s ease-in-out"
  }

  const display=(display,name,value)=>{
    setVisible(!display)
    setQuiz(name,value); 
  }

  return (
    <ButtonBox>
        <button  style={big} onClick={()=>display(visible)
        } >
          <div>{quiz.time}<p>Sec</p></div>
        </button>

        { visible && <button style={small} className={"hover"} onClick={()=>display(visible,"time",0)}
        >
          <div>0</div>
        </button>}

        { visible &&<button style={small1} className={"hover"} onClick={()=>display(visible,"time",15)}>
          <div>15</div>
        </button>
        }

        { visible && <button style={small2}  className={"hover"} onClick={()=>display(visible,"time",30)}>
          <div>30</div>
        </button>
        }

{ visible &&<button style={small3} className={"hover"} onClick={()=>display(visible,"time",45)}>
          <div>45</div>
        </button>
}
{ visible &&<button style={small4} className={"hover"} onClick={()=>display(visible,"time",60)}>
          <div>60</div>
        </button>
}
{ visible && <button style={small5} className={"hover"} onClick={()=>display(visible,"time",75)}>
          <div>75</div>
        </button>
}
{ visible &&<button style={small6} className={"hover"} onClick={()=>display(visible,"time",90)}>
          <div>90</div>
        </button>
}
{ visible && <button style={small7} className={"hover"} onClick={()=>display(visible,"time",105)}>
          <div>105</div>
        </button>
}
      
    </ButtonBox>
  );
}