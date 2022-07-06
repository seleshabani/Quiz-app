class FormSubscribeValidator
{
    static CheckValidEmail(input){
        return String(input).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    static CheckEmpty(input){
        if (input!=="") {
            return false;
        }
    }
}
export default FormSubscribeValidator;