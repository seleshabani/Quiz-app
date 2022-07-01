class User
{
    _email;
    _name;

    /**
     * 
     * @param {String} email 
     * @param {String} name 
     */
    constructor(email,name){
        this._email = email;
        this._name = name;
    }

    get email(){
        return this._email;
    }

    get name(){
        return this._name;
    }
    save(){

    }
}
export default User;