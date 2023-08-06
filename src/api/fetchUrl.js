import axios from "axios";
let htmlContent = ''
const fetchUrl = async ()=>{
    try{
        fetch('https://www.nseindia.com/').then((response) => response.text()).then((text) => console.log(text));
    }
    catch(error){
        console.error('Error fetching html content',error)
    }
    return htmlContent
}
export default fetchUrl