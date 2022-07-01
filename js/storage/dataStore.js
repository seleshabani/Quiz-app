import User from "../models/User.js";

class DataStore
{
    getParsed(key){
        return JSON.parse(localStorage.getItem(key));
    }

    setToString(data){
        return JSON.stringify(data);
    }
    /**
     * 
     * @param {User} user 
     */
    static saveUser(user){
        localStorage.setItem('user',JSON.stringify(user));
    }
    static getUser(){
        let data = JSON.parse(localStorage.getItem('user'));
        let user = new User(data._name,data._email);
        return user;
    }
}
export default DataStore;