import Quiz from "./Quiz.js";

class Timer
{
    _htmlProgressElt;
    _maxTime;
    _observers = [];
    constructor(){
        this._maxTime = 10;
    }
    /**
     * 
     * @param {Quiz} quiz 
     */
    run(quiz){
        this.clearAllInterval();
        this._htmlProgressElt = document.querySelector('#pbar');

        let numInt = setInterval(()=>{
            this._htmlProgressElt.value = 10 - --this._maxTime;
            if (this._maxTime <= 0) {
                this._maxTime=10;
                if (!quiz.isEnded()) {
                    // récupère le choix mm si on a pas cliqué
                    let choice = quiz.getUserChoice()
                    quiz.next(choice);
                }
                clearInterval(numInt);
            }
        },1000);

        return numInt;
    }
    clearAllInterval(){
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
        this._maxTime = 10;
    }
}
export default Timer;