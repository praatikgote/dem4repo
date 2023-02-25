import axios from "axios";
import "../axios";

export const uploadCategory = async (data) => {
    const config = {
      withCredentials: true,
      headers: {
        // 'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
    }
    const response = await axios.post('/4DApp/category/createCategory', data, config);
    return response;
  }
export const readCategories = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Credentials": true,
      },
    }
    const response = await axios.get('/4DApp/category/readCategories', config);
    return response;
}