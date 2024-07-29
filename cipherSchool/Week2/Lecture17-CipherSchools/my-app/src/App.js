import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component{
  name="Akhil";
  render(){
    return(
      <>
        <div>
          <h1>Hello From {this.name}</h1>
        </div>
        <div>
          <p>This is first paragraph</p>
        </div>
      </>
    );
  }
}

// function App() {
//   const name="Akhil"
//   return (
//     <div>
//       <h1 style={{
//         color:'red',
//         textAlign: "center"
//         }}>
//         Hello From {name}
//       </h1>
//     </div>
    
//   );
// }

export default App;