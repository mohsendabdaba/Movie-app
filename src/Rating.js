import React from 'react';

const Rating=({number,onchange=()=>{}})=>{
    let stars=[]
    for (let i=0;i<5;i++){
        if( i <{number})  {
            console.log(number)
            stars.push(<span key={i}onClick={()=>{onchange(i+1)}}> ★ </span>)}
            else {
            stars.push(<span key={i}onClick={()=>{onchange(i+1)}}> ✰ </span>)}
            return (
                <div>{stars}</div>
            )
        }  
    }


export default Rating

