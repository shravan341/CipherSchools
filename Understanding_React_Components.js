//Understanding React Components

import {Component} from "react";
class App extends Component{
  name = "Shravan";
  render(){
    return(
      <>
      <div>
        <h1 style={{
          color :"red",
          textAlign :"center",
        }}>Hello from me {this.name}</h1>
        <p style={{
          color :"blue",
          textAlign :"center",
        }}>hellooo</p> 
      </div>
      <div>
        <p>rhis is paragraph and name is: {this.name}</p>
      </div>
      </>
    );
  }
}

export default App;
