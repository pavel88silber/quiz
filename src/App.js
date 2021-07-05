import Layout from "./hoc/Layout/Layout"
import React, {Component} from "react"
import Quiz from '../src/container/Quiz/Quiz'


class App extends Component {

  render() {
    return (
      <div className="App">
  
        <Layout>

          <Quiz />
          
        </Layout>
  
      </div>
    )
  }

}

export default App;






