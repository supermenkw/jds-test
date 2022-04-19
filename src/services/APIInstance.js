import axios from 'axios'

const APIInstance = axios.create({
    baseURL: 'http://www.emsifa.com/api-wilayah-indonesia/api'
})

export default APIInstance;