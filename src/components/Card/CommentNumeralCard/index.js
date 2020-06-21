import React from 'react';
import CountUp from 'react-countup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: [[theme.spacing(2), 0]],
    borderRadius: '30%',
    height: '75%',
    width: '100%',
    border: '0.25em solid transparent',
    boxShadow: '0 0 0.125em 0.125em rgba(0, 0, 0, 0.5)',
  },
  typography_roll_up: {
    fontSize: '2.5em',
    fontWeight: 600,
  },
}));

const CommentNumeralCard = ({ comments }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <CountUp end={comments} className={classes.typography_roll_up} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" align="center" noWrap={true}>
          Comments
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CommentNumeralCard;
