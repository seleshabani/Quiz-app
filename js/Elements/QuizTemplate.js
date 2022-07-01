import User from "../models/User.js";
import Question from "./Question.js";

class QuizTemplate
{
    /**
     * 
     * @param {Question} question 
     * @param {Number} questionsLen
     * @returns 
     */
    static buildTemplate(question,questionsLen) {
        let choices = '';
        question.choices.forEach((choice,index)=> {
            choices += `
            <div class="reponses__item">
                <div class="reponses__item__radio">
                    <input type="radio" name="radio" id="rep${index}" value="${choice}">
                </div>
                <div class="reponses__item__reponse">
                    <label for="rep${index}">${choice}.</label>
                </div>
            </div> 
            `
        });
        return `
        <div class="form_quiz">
        <div class="question">
            <p>
                ${question.question}
            </p>
        </div>
        <div class="progress_container">
            <label for="">Question ${question.id}/${questionsLen}</label>
            <progress value="0" max="10" id="pbar" style="background:green;width:100%;"></progress>
        </div>
        <form class="reponses_form">
            <div class="reponses_items">
                ${choices}
            </div>
            <div class="actions">
                <button class="btn fail" id="cancelBtn">Quitter</button>
                <button class="btn success" id="submitbtn" disabled>Suivant</button>
            </div>
        </form>
    </div>  
        `
    }
    /**
     * 
     * @param {*} score 
     * @param {*} questionLen 
     * @param {User} user 
     * @returns 
     */
    static buildResultTemplate(score,questionLen,user){
        console.log(user)
        return `
            <div class="resultat">
                <div class="resultat_owner">
                    <h1>${user.name}</h1>
                    <p>${user.email}</p>
                </div>
                <div class="resultat_img success">
                <img src="img/Vector.png"/>
                </div>
                <div class="resultat_score">
                    ${score}/${questionLen}
                </div>
                <div class="resultat_action">
                    <a href="/" class="btn blue">Accueil</a>
                </div>
            </div>
        `
    } /**
     * 
     * @param {*} score 
     * @param {*} questionLen 
     * @param {User} user 
     * @returns 
     */
    static buildResultFailTemplate(score,questionLen,user){
        console.log(user)
        return `
            <div class="resultat">
                <div class="resultat_owner">
                    <h1>${user.name}</h1>
                    <p>${user.email}</p>
                </div>
                <div class="resultat_img fail">
                    <img src="img/Vector2.png"/>
                </div>
                <div class="resultat_score">
                    ${score}/${questionLen}
                </div>
                <div class="resultat_action">
                    <a href="/" class="btn blue">Accueil</a>
                </div>
            </div>
        `
    }
}
export default QuizTemplate;