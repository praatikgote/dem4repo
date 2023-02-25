import axios from "axios";
import "../axios";

export const createTag = async (data) => {
    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
    }
    const response = await axios.post('/4DApp/tag', data, config);
    return response;
  }
export const readTag = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
    }
    const response = await axios.get('/4DApp/tag', config);
    return response;
}