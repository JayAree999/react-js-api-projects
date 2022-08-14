import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"
//fetcing data from api
export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '5fd39d6b45mshd9fb79742a79664p135ae0jsndb385f728378',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        })
        
        return data;
}


