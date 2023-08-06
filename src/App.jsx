// import React from "react";
// import { useState} from "react";
// import './App.css'
// import fetchWeather from "./api/fetchWeather";
// import fetchNifty from "./api/fetchNifty";
// import GetData from "./components/GetData";

// const App = ()=>{
//     const [id,setID] = useState(0)
//     const [query,setQuery] = useState("")
//     const [nifty,setNifty] = useState({})
//     const [weather,setWeather] = useState({})
//     const fetchData = async (query,stock) => {
//         if (query&&stock) {
//         const niftyData = await fetchNifty(stock);
//         console.log(niftyData);
//         setNifty(niftyData)
//         console.log(nifty)
//         for(let i=0;i<51;i++){
//             if(niftyData.data[i].symbol===stock){
//                 //setNifty(niftyData.data[i])
//                 setID(i)
//                 console.log(i)
//             }
//         }

//         const weatherData = await fetchWeather('Mumbai');
//         //console.log(weatherData);
//         setWeather(weatherData);
//         }
//     };
//     const search = async (e) =>{
//         if( e.key === 'Enter'){
//             setQuery(e.target.value)
//             console.log(query)
//             fetchData('Mumbai',query)
//         }
//     }
//     return(
//         <div>
//         <div className="main-container">
//             <input type="text" className="search" placeholder="Search..." value={query} onChange={(e)=>setQuery(e.target.value)} onKeyDown={search} />
//             {weather.main&&(
//                 <div>
//                     <div className="city leftbox">
//                         <div className="city-temp">
//                             <h2 className="city-name">
//                                 {nifty.data[id].symbol}
//                             </h2>
//                         </div>
//                         <div className="info">
//                             <h2>LastPrice:{nifty.data[id].lastPrice}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Open:{nifty.data[id].open}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Change:{nifty.data[id].change}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>DayHigh:{nifty.data[id].dayHigh}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>DayLow:{nifty.data[id].dayLow}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Close:{nifty.data[id].previousClose}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>LastUpdateTime:{nifty.data[id].lastUpdateTime}</h2>
//                         </div>
//                      </div>
//                     <div className="city middlebox" >
//                     <div className="city-temp">
//                             <h2 className="city-name">
//                                 {nifty.data[id+1].symbol}
//                             </h2>
//                         </div>
//                         <div className="info">
//                             <h2>LastPrice:{nifty.data[id+1].lastPrice}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Open:{nifty.data[id+1].open}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Change:{nifty.data[id+1].change}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>DayHigh:{nifty.data[id+1].dayHigh}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>DayLow:{nifty.data[id+1].dayLow}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Close:{nifty.data[id+1].previousClose}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>LastUpdateTime:{nifty.data[id+1].lastUpdateTime}</h2>
//                         </div>
//                     </div>
//                     <div className="city rightbox" >
//                     <div className="city-temp">
//                             <h2 className="city-name">
//                                 {nifty.data[id+2].symbol}
//                             </h2>
//                         </div>
//                         <div className="info">
//                             <h2>LastPrice:{nifty.data[id+2].lastPrice}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Open:{nifty.data[id+2].open}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Change:{nifty.data[id+2].change}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>DayHigh:{nifty.data[id+2].dayHigh}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>DayLow:{nifty.data[id+2].dayLow}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>Close:{nifty.data[id+2].previousClose}</h2>
//                         </div>
//                         <div className="info">
//                             <h2>LastUpdateTime:{nifty.data[id+2].lastUpdateTime}</h2>
//                         </div>
//                     </div>
//                 </div>
//                 // <GetData id={id} nifty={nifty} />
//             )}
//         </div>
//         </div>
//     )
// }
// export default App
import { useState } from "react";
import React from "react";
import GetData from "./components/GetData";
import fetchNifty from "./api/fetchNifty";
import './App.css'
import fetchWeather from "./api/fetchWeather";
import fetchUrl from "./api/fetchUrl";

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
            fetchUrl()
        }
    }
    return(
        <>
        <div>
        <div className="main-container">
            <input type="text" className="search" placeholder="Enter NIFTY 50 Stock Name in CAPSLOCK and press Enter..." value={query} onChange={(e)=>setQuery(e.target.value)} onKeyDown={search} />
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
