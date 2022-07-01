import data2 from "./data2.js";

class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => console.log('an error occurs', err))
    }
    /**
     * charge les données en utilisant import pour github
     * @returns array
     */
    async getByImport(){
        return data2;
    }
}
export default Api;