import React, { Component } from 'react';
import Congratulations from '../../components/Congratulations/Congratulations';
import Instructions from '../../components/Instructions/Instructions';
import Reminder from '../../components/Reminder/Reminder';
import Dice from '../../components/Dice/Dice';
import './Game.scss';

class Game extends Component {
  state = {
    play: false,
    bones: [],
    correctAnswer: null,
    userAnswer: 0,
    message: null,
    messageClass: null,
    correctAnswersCombination: 0,
    isInputVoid: true
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.enterButtonListener);
  }

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.enterButtonListener);
  }

  enterButtonListener = (e) => {
    if (e.keyCode === 13 && this.state.isInputVoid) {
      this.setState({ message: "Input cannot be void.", messageClass: "fail" });
    } else if (e.keyCode === 13) {
      this.getAnswer();
    }
  }

  startGame = () => {
    this.setState({ play: true, correctAnswersCombination: 0 });
    this.getBones();
  }

  startNewGame = () => {
    this.startGame();
    this.setState({ play: true });
  }

  reRoll = () => {
    this.getBones();
    this.setState({ correctAnswersCombination: 0, message: "Your answers have been reset!", messageClass: "warning" });
  }

  getBones = () => {
    let bones = [];
    let correctAnswer = 0;

    for (let i = 0; i < 5; i++) {
      let randomBone = Math.floor(Math.random() * 6) + 1;

      if (randomBone === 3) {
        correctAnswer += 2;
      } else if (randomBone === 5) {
        correctAnswer += 4;
      }

      bones.push(<Dice key={i} randomBone={randomBone} />);
    }

    this.setState({ bones, correctAnswer });
  }

  inputClass = () => {
    if (this.state.isInputVoid) {
      return 'error';
    } else {
      return null;
    }
  }

  messageClassName = () => {
    if (this.state.messageClass === 'success') {
      return 'message success';
    } else if (this.state.messageClass === "fail") {
      return 'message fail';
    } else {
      return 'message warning';
    }
  }

  validateInput = (e) => {
    if (!e.target.value) {
      this.setState({ isInputVoid: true });
    } else {
      this.setState({ isInputVoid: false, userAnswer: parseInt(e.target.value) });
    }
  }

  getAnswer = () => {
    const { correctAnswersCombination, userAnswer, correctAnswer } = this.state;
    let positiveKeywords = ["Great! Keep Moving!", "Good! Keep on moving!", "Nice job! On the way to the Fellowship!"];
    let negativeKeywords = ["Bad! Try it one more time!", "Incorrect answer!", "Wrong! Roll again."];

    if (userAnswer === correctAnswer && correctAnswersCombination < 6) {
      this.setState({ message: positiveKeywords[Math.floor(Math.random() * 3)], messageClass: 'success', correctAnswersCombination: correctAnswersCombination + 1 });
      this.getBones();
    } else if (userAnswer !== correctAnswer) {
      this.setState({ message: negativeKeywords[Math.floor(Math.random() * 3)], messageClass: 'fail', correctAnswersCombination: 0 });
      this.getBones();
    }

    if (correctAnswersCombination === 6) {
      this.setState({ play: false });
    }
  }

  render() {
    const { correctAnswersCombination, play, message, isInputVoid } = this.state;
    return (
      <div className="wrapper">
        <Instructions hide={this.startGame} />
        {play && correctAnswersCombination < 6 &&
          <div className="game">
            <ul className="bones">
              {this.state.bones}
            </ul>
            <p className="petals">Petals:</p>
            <input type="number" className={this.inputClass()} onChange={(e) => this.validateInput(e)} /><br /><br />
            <button className="check-answer" onClick={this.getAnswer} disabled={isInputVoid}>Answer</button>
            {this.state.message !== null ? <p className={this.messageClassName()}>{message} <b> Correct Answers ( {correctAnswersCombination} ) </b></p> : null}
            <Reminder getBones={this.reRoll} />
          </div>
        }
        {this.state.correctAnswersCombination === 6 && <Congratulations startGame={this.startNewGame} />}
      </div>
    );
  }
}

export default Game;