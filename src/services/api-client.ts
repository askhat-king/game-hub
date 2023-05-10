import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '1a6ba1b5d9d246bc9c5a2e8d09f98aec'
    }
})