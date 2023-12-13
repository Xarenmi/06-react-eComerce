import axios from 'axios'

const ENDPOINT = 'https://xmart-ecommerce.onrender.com'

const userService = {
  register: (data) => axios.post(`${ENDPOINT}/register`, data),
  login: (data) => axios.post(`${ENDPOINT}/login`, data),
}

export default userService
