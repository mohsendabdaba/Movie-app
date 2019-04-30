import React from 'react';
import Rating from './Rating';

const RatingStars=({rate,onchange=()=>{}})=>(
<div>
    <span>Rating</span>
    <Rating number={rate} onchange={(rate)=>{onchange(rate)}}/>
</div>
)
export default RatingStars

