import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    // width: 222
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class CreatePostForm extends React.Component {
  constructor(props) {
    super(props);
    this.titleInput = React.createRef();
    this.categoryInput = React.createRef();
    this.contentInput = React.createRef();
  }

  submit = e => {
    e.preventDefault();
    this.props.createPost({
      title: this.titleInput.current.value,
      categories: this.categoryInput.current.value,
      content: this.contentInput.current.value
    });
  };

  render() {
    return (
      <form
        className={this.props.classes.container}
        noValidate
        autoComplete="off"
        onSubmit={this.submit}
      >
        <TextField
          id="name"
          label="Title"
          className={this.props.classes.textField}
          defaultValue="Hello World"
          margin="normal"
          inputRef={this.titleInput}
        />
        <TextField
          required
          id="required"
          label="Categories"
          defaultValue="Hello World"
          className={this.props.classes.textField}
          margin="normal"
          inputRef={this.categoryInput}
        />
        <TextField
          required
          id="required"
          label="Content"
          defaultValue="Hello World Hello World Hello World Hello World "
          className={this.props.classes.textField}
          margin="normal"
          inputRef={this.contentInput}
        />
        <FormControl className={this.props.classes.formControl}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={this.props.creating}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    );
  }
}

CreatePostForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreatePostForm);
