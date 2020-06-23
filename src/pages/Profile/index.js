import React from 'react';
import Grid from '@material-ui/core/Grid';
import AvatarCard from '../../components/Card/AvatarCard';
import InfoCard from '../../components/Card/InfoCard';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    height: '100vh',
  },
  scaleAvatar: {
    transform: 'scale(1.5)',
  },
}));

export default () => {
  const classes = useStyles();
  const socialLinks = [
    {
      url: 'https://www.linkedin.com/in/belalkazmi/',
      Image: <LinkedInIcon fontSize="large" style={{ color: '#FFFFFF' }} />,
    },
    {
      url: 'https://www.facebook.com/BelalAliKazmi',
      Image: <FacebookIcon fontSize="large" style={{ color: '#FFFFFF' }} />,
    },
    {
      url: 'https://www.instagram.com/numaishe_belal/',
      Image: <InstagramIcon fontSize="large" style={{ color: '#FFFFFF' }} />,
    },
    {
      url: 'https://github.com/BelalKazmi/',
      Image: <GitHubIcon fontSize="large" style={{ color: '#FFFFFF' }} />,
    },
  ];
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.grid}
      alignItems="center"
    >
      <Grid item xs={12} align="center" className={classes.scaleAvatar}>
        <AvatarCard author="BelalKazmi" />
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h2" align="center">
          Belal Ali Kazmi
        </Typography>
        <Typography variant="subtitle1" align="center">
          Front End Developer
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="subtitle1" align="center">
          Hobbies
        </Typography>
        <InfoCard
          tag={['Writing Poems', 'Playing Soccer', 'Watching SciFi Movies']}
        />
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="subtitle2" align="center">
          Connect with me
        </Typography>
        <InfoCard social={socialLinks} />
      </Grid>
    </Grid>
  );
};
