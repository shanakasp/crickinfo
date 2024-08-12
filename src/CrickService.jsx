import axios from "axios";

const API_KEY = "f8cecb2c-b543-4878-af66-091ac53d69d3";
const BASE_URL = "https://api.cricapi.com/v1";

export const getCurrentMatches = async (offset = 0) => {
  try {
    const responce = await axios.get(`${BASE_URL}/currentMatches`, {
      params: {
        apiKey: API_KEY,
        offset: offset,
      },
    });
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};
