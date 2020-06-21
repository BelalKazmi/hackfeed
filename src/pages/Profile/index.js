import React from 'react';
import Grid from '@material-ui/core/Grid';
import AvatarCard from '../../components/Card/AvatarCard';
import InfoCard from '../../components/Card/InfoCard';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: theme.spacing(10),
    backgroundColor: '#000000',
    color: '#FFFFFF',
    height: '100vh',
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" className={classes.grid}>
      <Grid item xs={12} align="center">
        <AvatarCard author="BelalKazmi" />
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h1" align="center">
          Belal Ali Kazmi
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <InfoCard
          url="https://github.com/BelalKazmi/"
          tag={['FrontEnd Developer', 'Writing Poems', 'Soccer Player']}
        />
      </Grid>
    </Grid>
  );
};
