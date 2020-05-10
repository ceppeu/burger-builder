import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-aec9d.firebaseio.com/'
})

export default instance