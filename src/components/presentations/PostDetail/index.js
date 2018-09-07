import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PostDetail(props) {
  const { classes, post } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h2">
          {post.id}
        </Typography>
        <Typography variant="headline" component="h3">
          Title:
        </Typography>
        <Typography component="p">{post.title}</Typography>
        <Typography variant="headline" component="h3">
          Content:
        </Typography>
        <Typography component="p">{post.content}</Typography>
        <Typography variant="headline" component="h3">
          Categories:
        </Typography>
        <Typography component="p">{post.categories}</Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(PostDetail);
