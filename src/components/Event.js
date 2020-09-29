import React, { PureComponent } from 'react';
import moment from 'moment';
import Moment from 'react-moment';
import { Card, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const primary = '#3F51B5';
const secondary = '#EC7C22';

const styles = theme => ({
  date: {
    color: primary,
    'font-size': 18,
  },
  eventTitle: {
    color: secondary,
    'font-size': 18,
    'text-align': 'start',
  },
  eventDetails: {
    'font-size': 13,
  },
  [theme.breakpoints.down('sm')]: {
    eventTitle: {
      'font-size': 15,
      'text-align': 'start',
    },
    eventDetails: {
      'font-size': 12,
    },
  },
});

class Event extends PureComponent {
  render() {
    const { classes } = this.props;
    let baseUrl = 'https://app.myrequest.ssflabs.net/event-overview/';
    baseUrl = baseUrl + this.props.event.id;
    return (
      <div style={this.props.style}>
        <Card>
          <a href={baseUrl} target="_blank">
            <CardContent className="event-container">
              <div className="event-date">
                <Moment format="MMM D" className={classes.date}>
                  {moment(this.props.event.date)}
                </Moment>
              </div>
              <div className="event-details-container">
                <Typography
                  variant="h5"
                  component="h1"
                  className={classes.eventTitle}
                >
                  {this.props.event.title}
                </Typography>
                <span className={classes.eventDetails}>Venue</span>
                <div>
                  <Moment format="ddd, MMM D" className={classes.eventDetails}>
                    {moment(this.props.event.date)}
                  </Moment>
                  <span className={classes.eventDetails}>
                    {' '}
                    at {this.props.event.startTime}
                  </span>
                </div>
              </div>
            </CardContent>
          </a>
        </Card>
      </div>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Event);
