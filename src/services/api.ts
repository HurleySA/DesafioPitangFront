import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://pitang-backend.herokuapp.com/api/vaccineSchedule'
})