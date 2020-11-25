import React, { Component } from "react";
import InputForm from './InputForm';

 class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <span onClick={this.handleClick}>
          <br/>
          <InputForm/>
        </span>
      </div>
    );
  }
}

export default PopUp;