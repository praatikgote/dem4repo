import axios from "axios";
import "../axios";

export const createProduct = async (data) => {
    const config = {
      withCredentials: true,
      headers: {
        // 'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
    }
    const response = await axios.post('/4DApp/wallpaper', data, config);
    return response;
  }
  export const readProduct = async () => {
    const config = {
      headers: {
        'Authorization' : "Bearer com.turnon.wall4d",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
    }
    const response = await axios.get('/4DApp/wallpaper', config);
    return response;
  }