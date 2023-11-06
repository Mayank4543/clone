import axios from "axios";
const BASE_URL = "https://youtube-search-results.p.rapidapi.com";
const options = {
  params: { q: "justin+bieber" },
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
  },
};
export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
