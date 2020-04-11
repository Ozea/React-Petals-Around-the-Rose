import React from 'react';

const Congratulations = (props) => {
  return (
    <div className="instructions-wrapper">
      <div>
        <p className="congratulations"><b>Congratulations!</b><br/><br/> You are the member of the <b>Fellowship Of The Rose </b></p>
        <button className="button-instructions" onClick={props.startGame}>Play again!</button>
      </div>
    </div>
  );
}

export default Congratulations;