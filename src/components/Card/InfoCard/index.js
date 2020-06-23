import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: [[0, theme.spacing(2)]],
    textDecoration: 'none',
  },
  tag: {
    margin: [[theme.spacing(1), theme.spacing(1), 0, 0]],
  },
}));

const InfoCard = ({ title, url, tag }) => {
  const classes = useStyles();
  return (
    <Link target="_blank" href={url}>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h6" align="left">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {tag.map((tag, key) => (
            <Chip key={key} size="small" label={tag} className={classes.tag} />
          ))}
        </Grid>
      </Grid>
    </Link>
  );
};

export default InfoCard;
