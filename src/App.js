
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

export default class App extends Component {
  constructor(){
    super();
    // console.log("this is App constructor");
    this.state = {
        mode : "body-tertiary",
        txtcolr: "black",
        cardcolr: "white"
        
    }
  }
  changeMode = () => {
    if(this.state.mode==="body-tertiary"){
    this.setState({mode:"dark",txtcolr:"light",cardcolr:"dark"});
    document.body.style.backgroundColor= "#434343";
    
    }
    else{
      this.setState({mode:"body-tertiary",txtcolr:"black",cardcolr:"white"});
      document.body.style.backgroundColor= "white";
    }
  }
  

  
  render() {
    return (
      <div>
        <Navbar mode ={this.state.mode} changeMode={this.changeMode} txtcolr={this.state.txtcolr}/>
        <News txtcolr={this.state.txtcolr} cardcolr={this.state.cardcolr} pageSize={8}/>
      </div>
    )
  }
}

