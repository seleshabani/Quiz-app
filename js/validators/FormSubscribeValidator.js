class FormSubscribeValidator
{
    /**
     * 
     * @param {String} input 
     * @returns 
     */
    static CheckValidEmail(input){
        return String(input).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    /**
     * Retourne une bool true si le texte de l'input est pas vide
     * @param {String} input 
     * @returns {boolean}
     */
    static CheckEmpty(input){
        if (input !=="" ) {
            return true;
        }else{
            return false;
        }
    }
    static ShowNameError(name='nom'){
        let name_error_elts = document.querySelector(`.${name}_error`);
        name_error_elts.innerHTML = `N’oubliez pas de renseigner votre ${name} avant de commencer le Quiz.`;
    }
    static ShowEmailError(){
        let email_error_elt = document.querySelector('.email_error');
        email_error_elt.innerHTML = 'Vérifiez votre email avant de commencer le Quiz';
    }
}
export default FormSubscribeValidator;