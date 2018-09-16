import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class EventCalendar extends Component {
  // convert event data into correct format for react-big-calendar
  // API example {
  //   id: 39,
  //   start: "2018-09-15T21:30:00+01:00",
  //   end: "2018-09-16T01:00:00+01:00",
  //   label: "Meeting xl",
  //   category: "red"
  //   }
  // Calendar example {
  //   id: 0,
  //   title: 'All Day Event very long title',
  //   allDay: true,
  //   start: new Date(2015, 3, 0),
  //   end: new Date(2015, 3, 1),
  // }
  calendarEvents = () => {
    const { events } = this.props;
    return events.reduce((prev, curr) => {
      const newObj = {
        id: curr.id,
        title: curr.label,
        start: new Date(curr.start),
        end: new Date(curr.end),
        category: curr.category
      };

      return prev.concat([newObj]);
    }, []);
  };

  // style individual events
  eventProps = event => {
    return {
      style: {
        color: '#1d1d1d',
        backgroundColor: 'white',
        border: 'none',
        borderBottom: 'solid 15px ' + event.category,
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
      }
    };
  };

  render() {
    return (
      <div className="wrapper">
        <BigCalendar
          defaultDate={new Date()}
          defaultView="week"
          events={this.calendarEvents()}
          eventPropGetter={this.eventProps}
          style={{
            height: '100%'
          }}
        />
      </div>
    );
  }
}

export default EventCalendar;
