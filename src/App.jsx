import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    const name = 'John Doe'
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}

export default App
