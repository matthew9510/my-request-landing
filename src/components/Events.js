import React, { Fragment, PureComponent } from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import DynamicList, { createCache } from 'react-window-dynamic-list';
import Event from './Event';
import moment from 'moment';

const cache = createCache();
export class Events extends React.Component {
  constructor(props) {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      events: [],
      numberOfEvents: 0,
    };
  }

  // lifecycle hook- invoked immediately after a component is mounted
  componentDidMount() {
    const eventsUrl =
      'https://970enl1mz3.execute-api.us-west-2.amazonaws.com/prod/events';
    fetch(eventsUrl)
      .then(res => res.json())
      .then(
        result => {
          this.events = result.response.body.Items;

          // sort events by date
          this.events = this.events.sort(
            (a, b) => moment(a.date) - moment(b.date)
          );

          // create current date for filtering use
          let now = moment().format();

          this.activeEvents = this.events.filter(el => {
            // Parse the event times
            let startTimeHour = Number(el.startTime.split(':')[0]);
            const isStartTimeAm = el.startTime.includes('AM');
            let endTimeHour = Number(el.endTime.split(':')[0]);
            const isEndTimeAm = el.endTime.includes('AM');

            // handling of ;'12 AM'
            if (isStartTimeAm && startTimeHour === 12) {
              startTimeHour = 0;
            }

            // Add 12 for pm times except if the hour is 12 pm
            if (!isStartTimeAm && startTimeHour !== 12) {
              startTimeHour += 12;
            }
            if (!isEndTimeAm && endTimeHour !== 12) {
              endTimeHour += 12;
            }

            const lengthOfEvent = endTimeHour - startTimeHour;

            return (
              (el.status === 'active' || el.status === 'paused') &&
              moment(el.date)
                .add(lengthOfEvent, 'hours')
                .isSameOrAfter(now)
            );
          });

          this.upcomingEvents = this.events.filter(
            el => el.status === 'created' && moment(el.date).isSameOrAfter(now)
          );

          // Load state for rendering
          this.setState({
            isLoaded: true,
            numberOfUpcomingEvents: this.upcomingEvents.length,
            upcomingEvents: this.upcomingEvents,
            numberOfActiveEvents: this.activeEvents.length,
            activeEvents: this.activeEvents,
          });
        },
        error => {
          this.setState({ error: error, isLoaded: true });
        }
      );
  }

  render() {
    const {
      error,
      isLoaded,
      numberOfUpcomingEvents,
      upcomingEvents,
      numberOfActiveEvents,
      activeEvents,
    } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Fragment>
          <div className="events-container">
            {numberOfUpcomingEvents > 0 && (
              <div className="upcoming-events">
                <h1>Upcoming events</h1>
                <DynamicList
                  height={
                    // this is for appropriate sizing of element
                    numberOfUpcomingEvents < 3
                      ? numberOfUpcomingEvents < 2
                        ? 150
                        : 250
                      : 300
                  }
                  itemCount={numberOfUpcomingEvents}
                  data={upcomingEvents}
                  cache={cache}
                  recalculateItemsOnResize={{ width: true, height: true }}
                >
                  {({ style, index }) => (
                    <Event
                      style={style}
                      index={index}
                      event={upcomingEvents[index]}
                    />
                  )}
                </DynamicList>
              </div>
            )}
            {numberOfActiveEvents > 0 && (
              <div className="active-events">
                {// if no upcoming events don't add spacing on top
                numberOfUpcomingEvents > 0 && <br />}
                <h1>Active events</h1>
                <DynamicList
                  height={
                    // this is for appropriate sizing of element
                    numberOfActiveEvents < 3
                      ? numberOfActiveEvents < 2
                        ? 150
                        : 250
                      : 300
                  }
                  itemCount={numberOfActiveEvents}
                  data={activeEvents}
                  cache={cache}
                  recalculateItemsOnResize={{ width: true, height: true }}
                >
                  {({ style, index }) => (
                    <Event
                      style={style}
                      index={index}
                      event={activeEvents[index]}
                    />
                  )}
                </DynamicList>
              </div>
            )}
          </div>
        </Fragment>
      );
    }
  }
}

export default Events;
