import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import styled from 'styled-components';

const ButtonBox = styled.div`
  possition:relative;
  .hover{
    &:hover{
      background:#4f018b;
    }
  }
`

export default function UploadButtons({quiz,setQuiz}) {

  const [visible, setVisible] = React.useState(false); 

  const big = {
    marginBottom:'25px',
    borderRadius:'100%',
    width:'70px',
    height: '70px',

    background: visible ? '#4f018b' : '#c8c8c8' 
  }

  const small = {
    position:"absolute",
    top:'-3px',
    left : '57px',
    borderRadius:'100%',
    width:'35px',
    height: '35px',

  }

  const small1 = {
    position:"absolute",
    top:'12px',
    left : '100px',
    borderRadius:'100%',
    width:'35px',
    height: '35px',
    
  }

  const small2 = {
    position:"absolute",
    top: '50px',
    left : '113px',
    borderRadius:'100%',
    width:'35px',
    height: '35px',
    
  }

  const small3 = {
    position:"absolute",
    top:'90px',
    left : '100px',
    borderRadius:'100%',
    width:'35px',
    height: '35px',
   
  }

  const small4 = {
    position:"absolute",
    top:"107px",
    left : '55px',
    borderRadius:'100%',
    width:'35px',
    height: '35px',
  }

  const small5 = {
    position:"absolute",
    top:'90px',
    left : '13px',
    borderRadius:'100%',
    width:'35px',
    height: '35px',
    
  }

  const small6 = {
    position:"absolute",
    top: '50px',
    left : '0',
    borderRadius:'100%',
    width:'35px',
    height: '35px',
    
  }

  const small7 = {
    position:"absolute",
    top:'10px',
    left : '15px',
    borderRadius:'100%',
    width:'35px',
    height: '35px',

  }

  const display=(display,name,value)=>{
    setVisible(!display)
    setQuiz(name,value); 
  }

  return (
    <ButtonBox>
        <button  style={big} onClick={()=>display(visible)}>
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
