import React, { Component } from "react";

import { Paper, Grid, Typography, ListItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  image: {
    width: 80,
    height: 100,
  },
  itemArea: {
    width: 360,
  },
};

class BookListItem extends Component {
  render() {
    const { book, classes, onSelectedBook } = this.props;
    return (
      <ListItem onClick={() => onSelectedBook(book)}>
        <Paper>
          <Grid container spacing={2}>
            <Grid item>
              <img className={classes.iamge} src={book.imgUrl}></img>
            </Grid>
            <Grid item className={classes.textArea}>
              <Typography component='h5' variant='h5'>
                {book.title}
              </Typography>
              <Typography gutterBottom>{book.author}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </ListItem>
    );
  }
}

export default withStyles(styles)(BookListItem);
