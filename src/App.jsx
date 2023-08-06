import { useState } from "react";
import React from "react";
import GetData from "./components/GetData";
import fetchNifty from "./api/fetchNifty";
import './App.css'
import fetchWeather from "./api/fetchWeather";

const App = ()=>{
    const [ind,setInd] = useState(0)
    const [niftyobj,setNiftyObj] = useState({})
    const [query,setQuery] = useState("")
    const [weather,setWeather] = useState({})

    const fetchData = async (query,stock) => {
        if (query&&stock) {
        const niftyData = await fetchNifty(stock);
        console.log(niftyData);
        setNiftyObj(niftyData)
        //console.log(niftyobj)
        for(let i=0;i<51;i++){
            if(niftyData.data[i].symbol===stock){
                //setNifty(niftyData.data[i])
                setInd(i)
                //console.log(i)
                //console.log(ind)
            }
            else{
                //console.log(ind)
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
        <>
        <div>
        <div className="main-container">
            <input type="text" className="search" placeholder="ENTER NIFTY 50 STOCK NAME IN CAPSLOCK AND PRESS ENTER..." value={query} onChange={(e)=>setQuery(e.target.value)} onKeyDown={search} />
            {weather.main&&query!=='ALL'&&(
                <>
                <div className="search welcome" style={{'color':'black'}}>Welcome to my NIFTY 50 Stocks!</div>
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
        </>
    )
}
export default App
