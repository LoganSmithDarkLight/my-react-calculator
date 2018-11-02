import React, { Component } from 'react'
class CalculationArea extends Component {
  render() {
    let display = this.props.display
    return (
      <div
      className="CalculationArea"
      >
      {display}
      </div>
    )
  }
}

export default CalculationArea