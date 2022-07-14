import DataStore from "../storage/dataStore.js";
import QuizTemplate from "./QuizTemplate.js";
import Timer from "./Timer.js";

class Quiz{
    _questions;
    _score;
    _questionIndex;
    _htmlWrapper;
    _timer;
    /**
     * tableau d'objets de type Question
     * @param {Array} questions 
     * @param {Timer} timer
     */
    constructor(questions,timer){
        this._questions = questions;
        this._score=0;
        this._questionIndex=0;
        this._htmlWrapper = document.querySelector('.white_card');
        this._timer = timer;
    }
    display(){
        if (this.isEnded()) {
            // display result
            this.displayResult();
        } else {
            // affichage des questions
            // this._timer.clearAllInterval();
            let question = this.getQuestionByIndexActu()
            let htmlForQuestion = QuizTemplate.buildTemplate(question,this._questions.length);
            this._htmlWrapper.innerHTML = htmlForQuestion;
            // écoute l'event des btns 
            this.btnsEvents()
            this._timerNum = this._timer.run(this)
            // timer start => relance le timer
        }
    }
    displayResult(){
        let user = DataStore.getUser();
        let halfOfQuestion = Math.ceil(this._questions.length/2);
        let htmlForResult = ''

        if (this._score>=halfOfQuestion) {
            htmlForResult = QuizTemplate.buildResultTemplate(this._score,this._questions.length,user);
        } else {
            htmlForResult = QuizTemplate.buildResultFailTemplate(this._score,this._questions.length,user)
        }
        this._htmlWrapper.innerHTML = htmlForResult;
    }
    btnsEvents(){
        let htmlCancelBtn = document.querySelector('#cancelBtn');
        let submitBtn = document.querySelector('#submitbtn');
        let formQuestion = document.querySelector('.reponses_form');
        let radiosbtn = document.querySelectorAll('input[name="radio"]');

        formQuestion.addEventListener('submit',e=>{
            e.preventDefault();
            let repChoice = e.target.radio.value;
            this.next(repChoice);
        })
        htmlCancelBtn.addEventListener('click',e=>{
            e.preventDefault();
            this.displayResult();
        })
        radiosbtn.forEach(radio=>{
            radio.addEventListener('click',e=>{

                let reponses_items= document.querySelectorAll('.reponses__item');
                reponses_items.forEach(itm=>itm.style.border = 'solid grey 1px')
        
                let id= e.target.id
                let item_container = document.querySelector(`#reponses__item_${id}`);
                item_container.style.border = 'solid green 2px';
                submitBtn.removeAttribute('disabled');
            })
        })

    }
    /**
     * reçoit en params la reponse de l'utilisateur sur le formulaire
     * @param {String} answer 
     */
    next(answer){
        if (this.getQuestionByIndexActu().isCorrectAnswer(answer)) {
            this._score = this._score+1;
        }
        this._questionIndex = this._questionIndex+1;
        this.display()
        // lance la méthode display
    }
    /**
     * 
     * @returns {Question}
     */
    getQuestionByIndexActu(){
        return this._questions[this._questionIndex];
    }
    /**
     * 
     * @returns {Boolean}
     */
    isEnded(){
        return this._questionIndex === this._questions.length;
    }

    /**
     * 
     * @returns {String}
     */
    getUserChoice(){
        let choice = ''
        let radioElt = document.querySelector('input[name="radio"]');
        if (radioElt.checked) {
            choice = radioElt.value;
        }
        return choice;
    }

    timer(){

    }
}
export default Quiz;