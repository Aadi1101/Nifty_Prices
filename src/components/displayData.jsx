import React, { useState } from "react";
import { GetData, arr_obj } from "./GetData";
import fetchNifty from "../api/fetchNifty";
import fetchWeather from "../api/fetchWeather";
import '../App.css'

const DisplayData = ()=>{
    const [ind,setInd] = useState(0)
    const [niftyobj,setNiftyObj] = useState({})
    const [query,setQuery] = useState("")
    const [weather,setWeather] = useState({})
    const fetchData = async (query,stock) => {
        if (query&&stock) {
        const niftyData = await fetchNifty(stock);
        console.log(niftyData);
        setNiftyObj(niftyData)
        for(let i=0;i<51;i++){
            if(niftyData.data[i].symbol===stock){
                
                setInd(i)
            }
        }

        const weatherData = await fetchWeather('Mumbai');
        //console.log(weatherData);
        setWeather(weatherData);
        }
    };
    const search = async (e) =>{
        if( e.key === 'Enter'){
            setQuery(e.target.value)
            console.log(query)
            fetchData('Mumbai',query)
            //fetchUrl()
        }
    }
    return(
        <div>
        <div className="main-container">
            <input type="text" className="search" placeholder="ENTER NIFTY 50 STOCK NAME IN CAPSLOCK AND PRESS ENTER..." value={query} onChange={(e)=>setQuery(e.target.value.toUpperCase())} onKeyDown={search} />
            {(niftyobj.data)&&query!=='ALL'&&(
                <>
                <div className="search welcome" style={{'color':'black'}}>{console.log(arr_obj)}</div>
                <GetData stock={niftyobj} identity={ind}/>
                <GetData stock={niftyobj} identity={ind+3}/>
                <GetData stock={niftyobj} identity={ind+6}/>
                <GetData stock={niftyobj} identity={ind+9}/>
                <GetData stock={niftyobj} identity={ind+12}/>
                <GetData stock={niftyobj} identity={ind+15}/>
                <GetData stock={niftyobj} identity={ind+18}/>
                <GetData stock={niftyobj} identity={ind+21}/>
                <GetData stock={niftyobj} identity={ind+24}/>
                <GetData stock={niftyobj} identity={ind+27}/>
                <GetData stock={niftyobj} identity={ind+30}/>
                <GetData stock={niftyobj} identity={ind+33}/>
                <GetData stock={niftyobj} identity={ind+36}/>
                <GetData stock={niftyobj} identity={ind+39}/>
                <GetData stock={niftyobj} identity={ind+42}/>
                <GetData stock={niftyobj} identity={ind+45}/>
                <GetData stock={niftyobj} identity={ind+48}/>
                </>
            )}
        </div>
        </div>
    )
}

export default DisplayData