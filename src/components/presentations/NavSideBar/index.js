import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add';

import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  drawerPaper: {
    position: 'relative',
    width: 240
  },
  toolbar: theme.mixins.toolbar
});

function NavSideBar(props) {
  const { classes } = props;
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <List component="nav">
        <NavLink to="/create" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Create Post" />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
}

NavSideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavSideBar);
