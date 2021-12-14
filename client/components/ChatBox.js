import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userMessage } from "../store/watson";

const ChatBox = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const chat = useSelector(state => state.watson.messages);


  const handleClick = async e => {
    const code = e.keyCode || e.which;

    //checks if the user hit the enter key
    if (code === 13) {
      console.log(message);
      dispatch(userMessage(message));
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <h1>Chatbot</h1>
      {/* handle messages */}

      {chat.length === 0
        ? ""
        : chat.map((msg, index) => (
            <div key={index} className={msg.type}>
              {msg.message}
            </div>
          ))}
      {/* input box */}

      <input
        id="chatBox"
        onChange={e => setMessage(e.target.value)}
        onKeyPress={handleClick}
        value={message}
      ></input>
    </div>
  );
};

export default ChatBox;
