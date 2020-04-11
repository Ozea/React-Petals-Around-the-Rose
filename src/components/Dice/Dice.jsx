import React from 'react';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import './Dice.scss';

function className(props) {
  if (props.randomBone === 1) {
    return "dice show-front";
  } else if (props.randomBone === 2) {
    return "dice show-right";
  } else if (props.randomBone === 3) {
    return "dice show-back";
  } else if (props.randomBone === 4) {
    return "dice show-left";
  } else if (props.randomBone === 5) {
    return "dice show-top";
  } else if (props.randomBone === 6) {
    return "dice show-bottom";
  }
}

const Bone = (props) => {
  return (
    <div className="scene">
      <div className={className(props)}>
        <div className="dice-face dice-front"><One /></div>
        <div className="dice-face dice-back"><Two /></div>
        <div className="dice-face dice-right"><Three /></div>
        <div className="dice-face dice-left"><Four /></div>
        <div className="dice-face dice-top"><Five /></div>
        <div className="dice-face dice-bottom"><Six /></div>
      </div>
    </div>
  );
}

export default Bone;