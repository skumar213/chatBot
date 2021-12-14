import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userMessage, sendMessage } from "../store/watson";

const ChatBox = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const chat = useSelector(state => state.watson.messages);
  const endOfMessages = useRef(null);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({behavior:'smooth'})
  }

  useEffect(scrollToBottom, [chat])

  const handleClick = async e => {
    const code = e.keyCode || e.which;

    //checks if the user hit the enter key
    if (code === 13) {
      console.log(message);
      dispatch(userMessage(message));
      dispatch(sendMessage(message));
      setMessage("");
    }
  };

  return (
    <div className="container">
      <div className="chat">
        <h1>Customer Service</h1>
        {/* handle messages */}

        <div className="historyContainer">
          {chat.length === 0
            ? ""
            : chat.map((msg, index) => (
                <div key={index} className={msg.type}>
                  {msg.message}
                </div>
              ))}
              <div ref={endOfMessages}></div>
        </div>
        {/* input box */}

        <input
          id="chatBox"
          onChange={e => setMessage(e.target.value)}
          onKeyPress={handleClick}
          value={message}
        ></input>
      </div>
    </div>
  );
};

export default ChatBox;
