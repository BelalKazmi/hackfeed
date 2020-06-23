import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    '&:hover, &:focus, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
  grid: {
    padding: [theme.spacing(1)],
  },
  tag: {
    margin: [[theme.spacing(1), theme.spacing(1), 0, 0]],
  },
}));

const InfoCard = ({ title, tag, social }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {tag &&
          tag.map((tag, key) => (
            <Chip key={key} size="small" label={tag} className={classes.tag} />
          ))}
        {social &&
          social.map((socialIcon, key) => (
            <Link
              target="_blank"
              href={socialIcon.url}
              className={classes.link}
              key={key}
            >
              {socialIcon.Image}
            </Link>
          ))}
      </Grid>
    </Grid>
  );
};

export default InfoCard;
