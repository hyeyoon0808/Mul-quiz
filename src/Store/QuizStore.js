import {observable,computed,action} from "mobx";
import Quizs from "../Quiz";

class QuizStore {
    
    @observable quizs=Quizs;
    @observable selectquiz = Quizs[0];
    @observable hoverquiz;
    @observable gamestart = false;

    @computed
    get getquizs(){
        return this.quizs ? this.quizs.slice() : [];
    }

    @computed
    get getselectquiz(){
        return this.selectquiz ? this.selectquiz : {};
    }

    @computed
    get getgamestart(){
        return this.gamestart ? this.gamestart : false
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
    Remove(ISBN){
        this.quizs = this.quizs.filter(quiz => quiz.ISBN !== ISBN)
    }
    @action
    selectQuiz(quiz){
        this.selectquiz = quiz;
    }
    @action
    ItemMouseOver(quiz){ 
        this.hoverquiz = quiz
    }
    
    
    @action
    addQuiz(quiz){
        this.quizs.push(quiz);
    }
    
    @action
    Modify(quiz){
        this.quizs = this.quizs.map((elem) => elem.ISBN === quiz.ISBN ? quiz : elem);
    }

    @action
    setstart(value){
        this.gamestart = value;
    }

}

export default new QuizStore();