import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserItem from './components/users/UserItem'

class App extends Component {
  render() {
    const name = 'John Doe'
    return (
      <div>
        <Navbar title="GitHub Hunter" icon="fab fa-github" />
        <UserItem />
      </div>
    )
  }
}

export default App
