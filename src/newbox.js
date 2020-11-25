import React, { Component } from "react";
import PopUp from "./PopUp";
import "tachyons";

export default class Newbox extends Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return (
      <div onClick={this.togglePop}>
          <div className='bg-lightest-blue dim dib pa5 ma5 grow bw2 shadow-5 tc w-20 min-h-100l'>
              <h1 className='f-headline lh-solid yellow'>+</h1>
          </div>
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}


