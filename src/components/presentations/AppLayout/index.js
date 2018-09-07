import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavSideBar from 'components/presentations/NavSideBar';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
  },
  drawerPaper: {
    position: 'relative',
    width: 240
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

function AppLayout(props) {
  const { classes, logoName, children } = props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="inherit" className={classes.appBar}>
        <Toolbar>
          {/* <Link to="/">
            <Typography variant="title" color="inherit" noWrap>
              {logoName}
            </Typography>
          </Link> */}
          <Typography variant="title" color="inherit" noWrap>
            <Link to="/">{logoName}</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <NavSideBar />
      {children}
    </div>
  );
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  logoName: PropTypes.string
};

AppLayout.defaultProps = {
  classes: PropTypes.object.isRequired,
  logoName: 'Blog Post'
};

export default withStyles(styles)(AppLayout);
