import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import * as actions from '../actions';

import EventCalendar from './calendar';

class App extends Component {
  // use momentjs to collect current and next week's date as ISO 8601 String
  state = {
    dateToday: moment().toISOString(),
    nextWeek: moment()
      .add(1, 'week')
      .toISOString()
  };

  // when component mounts, automatically collect event data
  componentDidMount() {
    // Es6 Destructuring
    const { dateToday, nextWeek } = this.state;
    // Fetch week events using state info
    this.props.fetchWeekEvents(dateToday, nextWeek);
  }
  render() {
    return (
      <div className="container">
        <h1 className="heading">BuzzHire Calendar</h1>
        <EventCalendar events={this.props.weekEvents} />
      </div>
    );
  }
}

// app component receives api data from redux state to prop
function mapStateToProps({ weekEvents }) {
  return {
    weekEvents
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
