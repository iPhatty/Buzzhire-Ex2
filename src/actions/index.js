import { FETCH_WEEK_EVENTS } from './types';
import axios from 'axios';

export function fetchWeekEvents(dateToday, nextWeek) {
  // create query string
  const url = `https://assessments.bzzhr.net/calendar/?format=json&since=${dateToday}&before=${nextWeek}`;
  // use axios to get promise data, redux-promise middleware handles the promise
  const response = axios.get(url);
  return {
    type: FETCH_WEEK_EVENTS,
    payload: response
  };
}
