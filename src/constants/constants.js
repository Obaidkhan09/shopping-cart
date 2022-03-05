import axios from "axios";

const instance = axios.create({
    // baseURL : 'http://localhost:5000',
    baseURL : 'https://shopping-cart09.herokuapp.com'
});
export default instance;