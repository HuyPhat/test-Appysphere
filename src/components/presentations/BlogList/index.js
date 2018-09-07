import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CustomTableCell from 'components/presentations/CustomTableCell';
import { withRouter } from 'react-router';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

const PostsList = ({ posts, classes, removePost, history }) => {
  // console.log(posts);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell />
            <CustomTableCell>id</CustomTableCell>
            <CustomTableCell>Title</CustomTableCell>
            <CustomTableCell>Categories</CustomTableCell>
            <CustomTableCell>Content</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map(row => {
            return (
              <TableRow
                className={classes.row}
                key={row.id}
                onClick={() => history.push(`post/${row.id}`)}
              >
                <CustomTableCell>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => removePost(row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CustomTableCell>
                <CustomTableCell component="th" scope="row">
                  {row.id}
                </CustomTableCell>
                <CustomTableCell>{row.title}</CustomTableCell>
                <CustomTableCell>{row.categories}</CustomTableCell>
                <CustomTableCell>{row.content}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

PostsList.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      categories: PropTypes.string,
      content: PropTypes.string
    })
  ),
  removePost: PropTypes.func
};

export default withRouter(withStyles(styles)(PostsList));
