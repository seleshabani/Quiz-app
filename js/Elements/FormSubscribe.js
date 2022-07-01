import User from "../models/User.js";
import DataStore from "../storage/dataStore.js";
import FormSubscribeValidator from "../validators/FormSubscribeValidator.js";

class FormSubscribe
{
    _name;
    _mail;
    _validator;
    _formElt;
    _formbtn;
    _router
    _inptName;
    _inptEmail;
    /**
     * 
     * @param {Router} router 
     * @param {FormSubscribeValidator} formValidator
     */
    constructor(formValidator){
        this._formElt = document.querySelector('.form_subscribe_form form');
        this._formbtn = document.querySelector('#form_sub_btn');
    }

    /**
     * lance l'affichage des questions juste après l'envoi du formulaire
     * @param {Quiz} quiz
     */
    OnSubmit(quiz){
        this._formElt.addEventListener('submit',(e)=>{
            e.preventDefault();
            this._inptName = e.target.name.value
            this._inptEmail = e.target.email.value

            // test du validateur

            let user = new User(this._inptName,this._inptEmail);
            DataStore.saveUser(user);

            // appel de la vue pour le quiz (start quiz)
           quiz.display();
        })
    }

}
export default FormSubscribe;