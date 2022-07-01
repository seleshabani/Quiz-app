import FormSubscribe from "./Elements/FormSubscribe.js";
import Question from "./Elements/Question.js";
import Quiz from "./Elements/Quiz.js";
import Timer from "./Elements/Timer.js";
import Api from "./fetchApi.js";

class App
{
    _APP_URL;
    _API;
    constructor(){
        this._APP_URL = '/js/data.json';
        this._API = new Api(this._APP_URL);
    }
    async run(){
        let formSubscribe = new FormSubscribe();
        let questionsDatas = await this._API.get();
        let questions = [];
        let timer = new Timer();
        questionsDatas.forEach(element => {
            questions.push(new Question(element));
        });
        let quiz = new Quiz(questions,timer);
        formSubscribe.OnSubmit(quiz);
    }
}
let app = new App();
app.run();