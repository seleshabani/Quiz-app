import Quiz from "./Quiz.js";

class Timer
{
    _htmlProgressElt;
    _htmlCompteur;
    _maxTime;
    _observers = [];
    _TIME=60;
    _INTERVAL=1000;
    constructor(){
        this._maxTime = 0;
    }
    /**
     * 
     * @param {Quiz} quiz 
     */
    run(quiz){
        this.clearAllInterval();
        this._htmlProgressElt = document.querySelector('#pbar');
        this._htmlCompteur = document.querySelector('#comptr')

        let numInt = setInterval(()=>{

            this._htmlProgressElt.value = ++this._maxTime;
            this._htmlCompteur.innerText = this._maxTime;
            console.log(this._htmlCompteur);
            if (this._maxTime == this._TIME) {
                this._maxTime=0;

                if (!quiz.isEnded()) {
                    // récupère le choix mm si on a pas cliqué
                    let choice = quiz.getUserChoice()
                    quiz.next(choice);
                }
                clearInterval(numInt);
            }
        },this._INTERVAL);

        return numInt;
    }
    /**
     * reinitialise les intervals
     */
    clearAllInterval(){
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
        // Clear any timeout/interval up to that id
        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
        this._maxTime = 0;
    }
}
export default Timer;