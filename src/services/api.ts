import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://desafio-pitang-backend.herokuapp.com/api/'
})