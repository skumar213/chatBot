import axios from "axios";

//action types
const INPUT_SUCCESS = "INPUT_SUCCESS";
const INPUT_FAIL = "INPUT_FAIL";

const SESSION_SUCCESS = "SESSION_SUCCESS";
const SESSION_FAIL = "SESSION_FAIL";
const MESSAGE_SUCCESS = "MESSAGE_SUCCESS";
const MESSAGE_FAIL = "MESSAGE_FAIL";

//action creator
const inputSuccess = message => {
  return {
    type: INPUT_SUCCESS,
    message,
  };
};

const inputFail = () => {
  return {
    type: INPUT_FAIL,
  };
};

const sessionSuccess = session => {
  return {
    type: SESSION_SUCCESS,
    session,
  };
};

const sessionFail = () => {
  return {
    type: SESSION_FAIL,
  };
};

const messageSuccess = message => {
  return {
    type: MESSAGE_SUCCESS,
    message,
  };
};

const messageFail = () => {
  return {
    type: MESSAGE_FAIL,
  };
};

//thunks
export const userMessage = message => async dispatch => {
  try {
    dispatch(inputSuccess(message));
  } catch (error) {
    console.log(error)
    dispatch(inputFail());
  }
};

export const createSession = () => async dispatch => {
  try {
    const { data: session } = await axios.get("/api/watson/session");

    dispatch(sessionSuccess(session));
  } catch (error) {
    console.log(error)
    dispatch(sessionFail());
  }
};

export const sendMessage = message => async dispatch => {
  try {
    const body = { input: message };
    const { data: response } = await axios.post("/api/watson/message", body);

    dispatch(messageSuccess(response.output.generic[0].text));
  } catch (error) {
    console.log(error)
    dispatch(messageFail());
  }
};

//reducer
export default function (state = { messages: [{message: "Hello!", type: 'bot'}] }, action) {
  switch (action.type) {
    case INPUT_SUCCESS:
      const messages = [
        ...state.messages,
        { message: action.message, type: "user" },
      ];
      return { ...state, messages };
    case INPUT_FAIL:
      return { ...state };
    case SESSION_SUCCESS:
      localStorage.setItem("session", action.session["session_id"]);
      return { ...state };
    case SESSION_FAIL:
      return { ...state };
    case MESSAGE_SUCCESS:
      const response = [...state.messages, {message: action.message, type: 'bot'}]
      return { ...state, messages: response };
    case MESSAGE_FAIL:
      return { ...state };
    default:
      return state;
  }
}
