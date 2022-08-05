import React from "react";


function Chat(props) {
  return (
    <div>
      <header>
        <button onClick={props.onClickReset}>Reset</button>
        <div className="title">
          <h4>Astro</h4>
          <h4>match</h4>
        </div>
        <button onClick={props.onClickReturn}>Return</button>
      </header>
    </div>
  );
}

export default Chat
