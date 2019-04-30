import React, { Component } from 'react';
import './App.css';

class CardMovie extends Component {

movierate=()=>{
  let stars=[]
  for (let i=0;i<5;i++){
      if( i <this.props.cardmovie.rating)  
          stars.push(<span key={i} style={{color:'yellow'}}> ★ </span>)
          else {
          stars.push(<span key={i}> ★ </span>)}
  }
   return stars
         
    } 
  render() {
    return (
      <div className="cardmovie">
          <fieldset>
            <legend>
              <div className='stars1'>
                {this.movierate()}
              </div>
            </legend>
            <a>
              <img className='image'src={this.props.cardmovie.image} />
              <h6> {this.props.cardmovie.title} </h6>
            </a>
          </fieldset>
      </div>
    );
  }
}

export default CardMovie;
