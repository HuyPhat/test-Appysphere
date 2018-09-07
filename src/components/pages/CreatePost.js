import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CreatePost from 'components/containers/CreatePost';

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works,
    marginTop: '65px',
    paddingTop: '20px'
  }
});

const CreatePostPage = ({ classes }) => {
  return (
    <main className={classes.content}>
      <Typography noWrap>{'Create Posts'}</Typography>
      <CreatePost />
    </main>
  );
};

export default withStyles(styles)(CreatePostPage);
