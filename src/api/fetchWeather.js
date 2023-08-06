import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f954a2c945d81f74821944053ec96cc7';
const fetchWeather = async (query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID: API_KEY
        }
    });
    return data
}

export default fetchWeather