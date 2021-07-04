import Layout from "./hoc/Layout/Layout"
import React, {Component} from "react";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
  
        <Layout>
          <div style={ {border: '1px solid black', width: 400, background: 'pink'} }>
            <h1>Layout works!</h1>
          </div>
        </Layout>
  
      </div>
    )
  }

}

export default App;






