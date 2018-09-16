import { FETCH_WEEK_EVENTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEEK_EVENTS:
      // returns results from api as new state
      return action.payload.data.results;
    default:
      return state;
  }
}
