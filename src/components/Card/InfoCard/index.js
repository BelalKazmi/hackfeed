import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: [[0, theme.spacing(2)]],
  },
}));

const InfoCard = ({ title, url, tag }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography variant="h6" align="left">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link target="_blank" href={url} variant="subtitle1">
          Click here
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Chip size="small" label={tag} />
      </Grid>
    </Grid>
  );
};

export default InfoCard;
