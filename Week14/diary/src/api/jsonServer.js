import axios from 'axios'

export default axios.create({
    //this base URL will change each time you run npm run tunnel,
    //be sure to updated it here!!!
    baseURL:
      'https://17f8-216-165-95-170.ngrok-free.app/',
  })