import axios from "axios";
import "../axios";

export const uploadBanner = async (data) => {
    const config = {
      withCredentials: true,
      headers: {
        // 'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
    }
    const response = await axios.post('/4DApp/banner', data, config);
    return response;
  }
export const readBanner = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
    }
    const response = await axios.get('/4DApp/banner', config);
    return response;
}