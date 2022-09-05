import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            title: 'Welcome'
        }
    }

  render() {
    return (
        <div className='header'>
            <h2>{this.state.title}</h2>
        </div>

    )
  }
}

export default Header