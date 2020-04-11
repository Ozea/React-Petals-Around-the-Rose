import React, { Component } from 'react';
import './Instructions.scss';

class Instructions extends Component {
  state = {
    showInstructions: true
  }

  hideInstructions = () => {
    this.setState({ showInstructions: false });
    this.props.hide();
  }

  class = () => {
    if (this.state.showInstructions) {
      return 'instructions-wrapper';
    } else {
      return 'instructions-wrapper hide';
    }
  }

  render() {
    return (
      <div className={this.class()}>
        <div>
          <p className="name">Petals Around The Rose</p>
          <p>The rules are easy.</p>
          <p>Five dice will roll and you must guess the "answer" for each</p>
          <p>You will have up to 20 seconds on each answer. After the time is over the score will be set to 0</p>
          <p>...that's ALL the information you will get</p>
          <p>Six consecutive correct guesses admits you to the
          <b> Fellowship of the Rose!</b>
          </p>
          <p><b>Good luck!</b></p>
          {this.state.showInstructions ? <button className="button-instructions" onClick={this.hideInstructions}>Ready!</button> : null}
        </div>
      </div>
    );
  }
}

export default Instructions;