import React, { Component } from 'react';
import CardMovie from './cardMovie'
import './App.css';

class CardList extends Component {
    constructor(props){
        super(props)
    }
  render() {
    console.log(this.props.tab,'hello')
    console.log("hello")
    return (
    <div className="card-list">
   {this.props.tab.filter(el =>el.title.includes(this.props.name) && el.rating >= this.props.stars ).map(el=> <CardMovie cardmovie={el} />)}
  
    </div>    
    );
  }
}
export default  CardList ;
