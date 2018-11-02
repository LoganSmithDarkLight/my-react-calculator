import React, { Component } from 'react'
class Button extends Component {
  render() {
    return (
      <div
      onClick={this.props.onClick}
      className="Button"
      size={this.props.size}
      value={this.props.value}
      >
      {this.props.label}
      </div>
    )
  }
}

export default Button