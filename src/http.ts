import axios from "axios";

export default axios({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'get',
    headers: {
        'Content-Type': 'application/json'
    }
})