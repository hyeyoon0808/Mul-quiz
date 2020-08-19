import { observable, computed, action } from "mobx";
import Quizs from "../Quiz";

class QuizStore {
    
    @observable quizs=Quizs;
    @observable selectquiz = Quizs[0];
    @observable hoverquiz;
    @observable gamestart = false;

    @observable checked = false;
    @observable selectedFile = null;
    
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

//   @computed
//   get getPostProps() {
//     const formData = new FormData();
//     formData.append("file", this.selectedFile);
//     return axios
//       .post("/public/book_images", formData)
//       .then((res) => {
//         alert("succeed");
//       })
//       .catch((err) => {
//         alert("failed");
//       });
//   }

    @computed
    get getgamestart(){
        return this.gamestart ? this.gamestart : false
    }

    @computed
    get getlogin(){
        return this.login ? this.login : false
    }

    @action
    setQuizProps(name, value) {
    console.log(name);
    this.selectquiz = {
      ...this.selectquiz,
      [name]: value,
    };
  }

  @action
    selectQuiz(quiz){
        this.selectquiz = quiz;
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
  Remove(ISBN) {
    this.quizs = this.quizs.filter((quiz) => quiz.ISBN !== ISBN);
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
    
}

export default new QuizStore();
