import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import Footer from '../pages/Footer/Footer';

const styles = theme => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

class SimpleGrow extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    checked: true,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>

          <Grow in={checked}>
          <Typography variant="display3" gutterBottom align="center">
            Good afternoon, Winona.
          </Typography>
          </Grow>
          <br/>

          <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 1000 } : {})} >
            <Typography variant="display3" gutterBottom align="center">
            {/* .props.children because it's being passed a material ui element */}
              Currently {this.props.todaysFormsNumber} {((this.props.todaysFormsNumber.props.children===1) ? "form": "forms")} from {this.props.todaysJobsNumber} active {((this.props.todaysJobsNumber.props.children===1) ? "job": "jobs")}
            </Typography>
          </Grow>
          <br/>

          <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 2000 } : {})} >
            <Typography variant="display2" gutterBottom align="center">
              Today's Forms
            </Typography>
          </Grow>
          <br/>

          <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 2000 } : {})} >
            {this.props.todaysForms}
          </Grow>
          <br/>

          <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 3000 } : {})} >
            <Typography variant="display2" gutterBottom align="center">
              Today's Active Jobs
            </Typography>
          </Grow>
          <br/>

          <Grow in={checked} style={{ transformOrigin: '0 0 0' }} {...(checked ? { timeout: 3000 } : {})} >
            {this.props.todaysJobs}
          </Grow>
          <br/>
          <br/>
          <Footer/>
      </div>
    );
  }
}

SimpleGrow.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleGrow);