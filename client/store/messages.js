import axios from 'axios';

const SET_MESSAGES = 'SET_MESSAGES'


export default function(state = [], action) {
  switch (action.type) {
    case SET_MESSAGES:
      return action.messages
    default:
      return state
  }
}
