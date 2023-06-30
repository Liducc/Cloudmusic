import axios from 'axios'

// 请求banner
let service = axios.create({
    baseURL: "http://localhost:3000/",
    timeout:3000
})

export default service