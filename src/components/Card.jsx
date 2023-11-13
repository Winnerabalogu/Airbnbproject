/* eslint-disable react/prop-types */
import React from 'react'
// import img1 from '../images/image 12.png'
import star from '../images/Star 1.png'

export default function Card(props) {
  let badgeText
  if (props.items.openSpots===0) {
        badgeText = "SOLD OUT"
  }else if (props.items.location === "online") {
    badgeText = "ONLINE"
  }else if (props.items.location === "Norway") {
        badgeText ="NORWAY"
  }
  return (
   
         <div className="card">
         {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.items.img} className="card-img"/>
            <div className="card-content">
                <img src={props.star} className="card-star"/>
                <span className="rate">{props.items.rate}</span>
                <span className="grey">{props.items.count}</span>
                <span className="grey">{props.items.country}</span>
            </div>
            <p className="card-text">{props.items.comments}</p>
            <p className="card-text2"><span className="bold">{props.items.price}</span> / person</p>
        </div>
 
  )
}
