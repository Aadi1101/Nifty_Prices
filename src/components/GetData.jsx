import React, { useState } from 'react'
import '../App.css'

const arr_obj = [{}]
const GetData = ({stock,identity})=>{
    let diff_yearHigh,diff_yearLow,percentChange = 0
    const nifty = stock
    let idone = identity
    let idtwo = identity+1
    let idthree = identity+2
    if(identity>=49){
        idthree = 0
    }
    if(identity===50){
        idtwo=0
        idthree=1
    }
    if(identity>=51){
        idone = 0
        idtwo = idone+1
        idthree = idone+2
    }
    function difference_yearHigh(id){
        diff_yearHigh = nifty.data[id].yearHigh - nifty.data[id].lastPrice
        return (diff_yearHigh.toFixed(3))
    }
    const difference_yearLow = (id)=>{
        diff_yearLow = nifty.data[id].lastPrice - nifty.data[id].yearLow
        return (diff_yearLow.toFixed(3))
    }

    const changePercent = (id)=>{
        percentChange = nifty.data[id].change/nifty.data[id].open 
        return((percentChange*100).toFixed(3))
    }

    const arrayObj = ()=>{
        for(let i=0;i<51;i++){
            let obj = {
                'symbol':nifty.data[i].symbol,
                'pChange':nifty.data[i].pChange
            }
            if (!arr_obj.some(item => item.symbol === obj.symbol)) {
                arr_obj.push(obj);
            }
        }
        return arr_obj
    }
    arrayObj()

  return(
    <>
      <div className="city leftbox" key={idone}>
          <div className="city-temp">
              <h2 className="city-name">
                  {nifty.data[idone].symbol}
              </h2>
          </div>
          <div className="info" >
              <h2>LastPrice:{nifty.data[idone].lastPrice}</h2>
          </div>
          <div className="info">
              <h2 style={{color:'green'}}>Open:{nifty.data[idone].open}</h2>
          </div>
          <div className="info">
              <h2>Change:{nifty.data[idone].change.toFixed(3)}</h2>
          </div>
          <div className="info">
              <h2 style={{color:'blue'}}>yearHigh:{nifty.data[idone].yearHigh} ({difference_yearHigh(idone)})</h2>
          </div>
          <div className="info">
              <h2 style={{color:'red'}}>yearLow:{nifty.data[idone].yearLow} (-{difference_yearLow(idone)})</h2>
          </div>
          <div className="info">
              <h2 style={{color:'grey'}}>Close:{nifty.data[idone].previousClose}</h2>
          </div>
          <div className="info">
            <h2>Change(%):{changePercent(idone)}%</h2>
          </div>
          <div className="info">
              <h2>LUT:{nifty.data[idone].lastUpdateTime}</h2>
          </div>
        </div>
      <div className="city middlebox" key={idtwo} >
      <div className="city-temp">
              <h2 className="city-name">
                  {nifty.data[idtwo].symbol}
              </h2>
          </div>
          <div className="info">
              <h2>LastPrice:{nifty.data[idtwo].lastPrice}</h2>
          </div>
          <div className="info">
              <h2 style={{color:'green'}}>Open:{nifty.data[idtwo].open}</h2>
          </div>
          <div className="info">
              <h2>Change:{nifty.data[idtwo].change.toFixed(3)}</h2>
          </div>
          <div className="info">
              <h2 style={{color:'blue'}}>yearHigh:{nifty.data[idtwo].yearHigh} ({difference_yearHigh(idtwo)})</h2>
          </div>
          <div className="info">
              <h2 style={{color:'red'}}>yearLow:{nifty.data[idtwo].yearLow} (-{difference_yearLow(idtwo)})</h2>
          </div>
          <div className="info">
              <h2 style={{color:'grey'}}>Close:{nifty.data[idtwo].previousClose}</h2>
          </div>
          <div className="info">
            <h2>Change(%):{changePercent(idtwo)}%</h2>
          </div>
          <div className="info">
              <h2>LUT:{nifty.data[idtwo].lastUpdateTime}</h2>
          </div>
      </div>
      <div className="city rightbox" key={idthree} >
      <div className="city-temp">
              <h2 className="city-name">
                  {nifty.data[idthree].symbol}
              </h2>
          </div>
          <div className="info">
              <h2>LastPrice:{nifty.data[idthree].lastPrice}</h2>
          </div>
          <div className="info">
              <h2 style={{color:'green'}}>Open:{nifty.data[idthree].open}</h2>
          </div>
          <div className="info">
              <h2>Change:{nifty.data[idthree].change.toFixed(3)}</h2>
          </div>
          <div className="info">
              <h2 style={{color:'blue'}}>yearHigh:{nifty.data[idthree].yearHigh} ({difference_yearHigh(idthree)})</h2>
          </div>
          <div className="info">
              <h2 style={{color:'red'}}>yearLow:{nifty.data[idthree].yearLow} (-{difference_yearLow(idthree)})</h2>
          </div>
          <div className="info">
              <h2 style={{color:'grey'}}>Close:{nifty.data[idthree].previousClose}</h2>
          </div>
          <div className="info">
            <h2>Change(%):{changePercent(idthree)}%</h2>
          </div>
          <div className="info">
              <h2>LUT:{nifty.data[idthree].lastUpdateTime}</h2>
          </div>
      </div>
  </>
  )
}
export {GetData,arr_obj}