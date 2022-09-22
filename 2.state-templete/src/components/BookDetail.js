import React, { Component } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    maxWidth: 450,
  },
  media: {
    width: "70%",
    height: "70%",
  },
};

class BookDetils extends Component {
  render() {
    const { book, classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardHeader title={book.title} subheader={book.author} />
        <CardMedia
          className={classes.media}
          component='img'
          image={book.imgUrl}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {book.introduce}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(BookDetils);
