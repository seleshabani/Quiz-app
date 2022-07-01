class Question
{
    _id;
    _question;
    _choices;
    _answer;
    constructor(data){
        this._id = data.id;
        this._question = data.question;
        this._choices = data.choices;
        this._answer = data.answer;
    }
    /**
     * réponse de l'utilisateur
     * @param {String} choice 
     * @returns 
     */
    isCorrectAnswer(choice){
        return this._answer === choice;
    }

    get question(){
        return this._question;
    }
    get id(){
        return this._id;
    }
    get choices(){
        return this._choices;
    }
}
export default Question;