import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

function NavAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Link to="/">
            <Typography variant="title" color="inherit">
              Blog Post SPA
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavAppBar);
