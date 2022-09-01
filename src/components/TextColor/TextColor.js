import React from 'react'

class TextColor extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red"
    };
   this.changeTextColor()
  }

  changeTextColor(){
   setTimeout( () => this.setState({color: "green"}), 5000)
  }

  render() {
    return (
      <h3 style={{color: this.state.color}}>{this.state.color}</h3>
    )
  }
}

export default TextColor