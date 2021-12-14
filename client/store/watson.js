import axios from "axios";

//action types
const INPUT_SUCCESS = "INPUT_SUCCESS";
const INPUT_FAIL = "INPUT_FAIL";

//action creator
const messageSuccess = message => {
  return {
    type: INPUT_SUCCESS,
    message,
  };
};

const messageFail = () => {
  return {
    type: INPUT_FAIL,
  };
};

//thunks
export const userMessage = message => async dispatch => {
  try {
    dispatch(messageSuccess(message));
  } catch (error) {
    dispatch(messageFail());
  }
};

//reducer
export default function (state = { messages: [] }, action) {
  switch (action.type) {
    case INPUT_SUCCESS:
      const messages = [...state.messages, { message: action.message, type: "user" }];
      return { ...state, messages };
    case INPUT_FAIL:
      return { ...state };
    default:
      return state;
  }
}
