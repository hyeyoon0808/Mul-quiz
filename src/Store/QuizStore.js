import {observable,computed,action} from "mobx";
import Quizs from "../Quiz";

class QuizStore {
    
    @observable quizs=Quizs;
    @observable selectquiz = Quizs[0];
    @observable hoverquiz;

    @computed
    get getquizs(){
        return this.quizs ? this.quizs.slice() : [];
    }

    @computed
    get getselectquiz(){
        return this.selectquiz ? this.selectquiz : {};
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
    

}

export default new QuizStore();