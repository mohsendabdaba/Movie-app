import React, { Component } from 'react';
import CardList from './card-list';
import { InputGroup, Input } from 'reactstrap';
import Modalbtn from './Modal'
import './App.css';

const tab1=[
  {
    image: "https://i.imgur.com/QxAgKyz.jpg",
    title: ' The kid Who Would Be king',
    rating: '1',
    
  },
  {
      image: "https://i.imgur.com/foER0lQ.jpg",
      title: 'CAPTAIN MARVEL',
      rating: '2',
    },
    {
      image: "https://i.imgur.com/fBSWNhz.jpg",
      title: ' INTER STELLAR',
      rating: '4',
      
    },
   
    {
      image: "https://i.pinimg.com/564x/76/24/dc/7624dc3a55d38f270f77b86059e89c0c.jpg",
      title: 'THE DIRECTIVE',
      rating: '3',
      
    },
  ]
class App extends Component {
  constructor (props){
    super(props)
    this.state={
      tab : tab1,
      title:'',
      image:'',
      rating:'',
        FindName:'',
        minrate:3,   
        rate:0
      }
  }
  Change =(e)=>{ 
    
    this.setState({
      FindName: e.target.value
    })
  }
  cardrate=()=>{
    let stars=[]
    for (let i=0;i<5;i++){
        if( i <this.state.rate)  
            stars.push(<span  onClick={()=>{this.setState({rate:i+1})}} style={{color:'yellow'}}> ★ </span>)
            else {
            stars.push(<span onClick={()=>{this.setState({rate:i+1})}}> ★ </span>)}
    }
            return stars     
      }

  modal1 =(e1)=>{
    this.setState({ 
    title:e1.target.value
    })
  }
  modal2 =(e2)=>{
   
    this.setState({ 
    image:e2.target.value
    })
  }
  modal3 =(e3)=>{
    this.setState({ 
    rating:e3.target.value
    })
  }
  modal =()=>{
   let movies= this.state.tab
 const   obj= {title:this.state.title,
    image:this.state.image,
    rating:this.state.rating}
    movies.push(obj)
   console.log(movies)
    this.setState({
     tab: movies
    })
  }

  render() {
    return (
      <div className="App">
          <div className='search'>
          <InputGroup className="input">
          <Input onChange={e => this.Change(e)}  className="input1"placeholder="Type movie name to search" />
          </InputGroup>
          {this.cardrate()}
         < Modalbtn modal1={this.modal1} modal2={this.modal2}
          modal3={this.modal3} modal={this.modal} btn1={this.state.tab.title}
           btn2={this.state.tab.image} btn3={this.state.tab.Rating} tab={this.state.tab} />
          </div>
        <CardList tab={this.state.tab} name={this.state.FindName} stars={this.state.rate}/>
      </div>
    );
  }
}
export default App;
