class FormSubscribeValidator
{
    static CheckValidEmail(input){
        // var re = /\S+@\S+\.\S+/;
        // return re.test(email);
        return String(input).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    static CheckEmptyName(input){

    }
}
export default FormSubscribeValidator;