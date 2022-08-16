import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"
//fetcing data from api
export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '2d3ecfc125msh60a64a672235c15p11b14fjsndab682f4306f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        })
        
        return data;
}


