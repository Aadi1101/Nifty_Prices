import axios from 'axios';

const fetchNifty = async (query)=>{
    const options = {
    method: 'GET',
    url: 'https://latest-stock-price.p.rapidapi.com/price',
    params: {
        Indices: 'NIFTY 50'
    },
    headers: {
        'X-RapidAPI-Key': 'f17d854373msh5ba4158875619f3p1c280ajsnedd41f87737e',
        'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        for(let i=0;i<51;i++){
            if(response.data[i].symbol===query){
                console.log(response.data);
            }
        }
        return response
    } catch (error) {
        console.error(error);
    }
}
export default fetchNifty