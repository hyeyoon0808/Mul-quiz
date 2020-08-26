import { observable, computed, action } from "mobx";
import Quizs from "../Quiz";


class QuizStore {
    
  @observable quizs=Quizs;
  @observable selectquiz = Quizs[0];
  @observable hoverquiz;
  @observable gamestart = false;

  @observable checked = false;
  @observable selectedFile = null;

  @observable totalScore = 0;
  
  //login
  @observable login = false;
  @observable user = "test";
  @observable passwd = "123";
  @observable error = "";
  @observable idValue = "";
  @observable pwValue = "";
  @observable preventDefault = "";

  @computed
  get getquizs() {
    return this.quizs ? this.quizs.slice() : [];
  }
  
  @computed
  get getselectquiz() {
    return this.selectquiz ? this.selectquiz : {};
  }

  @computed
  get getcheckedquiz() {
    return this.checked ? this.checked : {};
  }


  @computed
  get getgamestart(){
      return this.gamestart ? this.gamestart : false
  }

  @computed
  get getlogin(){
      return this.login ? this.login : false
  }
  
  @computed
  get getTotal(){
    return this.totalScore ? this.totalScore : 0;
  }

    @action
    setQuizProps(name, value) {
    this.selectquiz = {
      ...this.selectquiz,
      [name]: value,
    };
  }

  @action
    selectQuiz(quiz){
        for(var i=0; i<this.quizs.length; i++){
          this.quizs[i].default = false;
          this.quizs[i].selectCheck = false;
        }
        quiz.selectCheck = quiz.selectCheck === false ? true : false
        this.selectquiz = quiz;
        console.log(quiz.selectCheck)
    }

  @action
  setFileProps(event) {
    console.log(event);
    this.selectquiz = {
      ...this.selectquiz,
      [this.selectquiz.imgUrl]: event.target.checked,
    };
  }
  @action
  nextQuiz(quiz){
    for(var i=0; i<this.quizs.length; i++){
      this.quizs[i].default = false;
      this.quizs[i].selectCheck = false;
      if(this.quizs[i] === quiz){ 
        this.selectquiz = this.quizs[i+1];
        console.log( this.selectquiz)
      }
    }
    if(this.selectquiz === undefined){
      alert("Quiz가 끝났습니다. 수고하셨습니다.")
    }else{
      this.selectquiz.selectCheck = true;
    }
    
  }

  @action
  Remove(ISBN) {
    this.quizs = this.quizs.filter((quiz) => quiz.ISBN !== ISBN);
    this.selectquiz = Quizs[0];
  }

  @action
  ItemMouseOver(quiz) {
    this.hoverquiz = quiz;
  }

  @action
  addQuiz(quiz) {
    this.quizs.push(quiz);
  }

  @action
  Modify(quiz) {
    this.quizs = this.quizs.map((elem) =>
      elem.ISBN === quiz.ISBN ? quiz : elem
    );
  }

    @action
    setstart(value){
        this.gamestart = value;

    }

    @action
    setlogin(value){
        this.login = value;

    }
    //로그인
    @action
    changeId(value){this.idValue = value}
    @action
    changePw(value){this.pwValue = value}
    
    @action
    TotalScore(score){
      this.totalScore += score
    }
}

export default new QuizStore();
