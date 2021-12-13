import React, {useState} from "react";

const ChatBox = () => {
  const [message, setMessage] = useState("");

  const handleClick = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      console.log(message)
    }
  }

  return (
    <div className="chat">
      <h1>Chatbot</h1>
      {/* handle messages */}

      <div>Messages go here</div>
      {/* input box */}

      <input id="chatBox" onChange={e => setMessage(e.target.value)} onKeyPress={handleClick}></input>
    </div>
  );
};

export default ChatBox;
