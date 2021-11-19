import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://inline-api.herokuapp.com'
})

export default instance