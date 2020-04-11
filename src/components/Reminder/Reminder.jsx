import React from 'react';

const Reminder = (props) => {
  return (
    <div>
      <p className="reminder"><b>Reminder:</b> If you don`t know the answer you can roll again! <br/> Your correct answers score will be set to 0.</p>
      <button className="reroll" onClick={props.getBones}>Reroll &#8635;</button><br />
    </div>
  );
}

export default Reminder;