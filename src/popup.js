import React, { Component } from "react";
import InputForm from './InputForm';

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
          <span className="close" onClick={this.handleClick}>
            &times;
            <InputForm/>
          </span>
      </div>
    );
  }
}
