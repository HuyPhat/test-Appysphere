import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PostDetail from 'components/containers/PostDetail';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 11,
    minWidth: 0, // So the Typography noWrap works,
    overflowY: 'auto'
  }
});

const PostDetailPage = ({ classes }) => {
  return (
    <main className={classes.content}>
      <Typography noWrap>{'Post Detail'}</Typography>
      <PostDetail />
    </main>
  );
};

export default withStyles(styles)(PostDetailPage);
