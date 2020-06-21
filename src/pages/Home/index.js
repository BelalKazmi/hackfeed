import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import LinkButton from '../../components/LinkButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    backgroundColor: '#000000',
  },
  button: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    margin: '2em',
    height: '3em',
    '&:hover, &:focus': {
      backgroundColor: '#D3D3D3',
      color: '#000000',
    },
  },
  typography: {
    color: '#FFFFFF',
    fontWeight: 600,
    padding: '0.25em',
    fontSize: '5em',
  },
  typography_subtitle: {
    color: '#FFFFFF',
    padding: '0.5em',
    margin: '1em',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row-reverse"
      layout="row"
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <Grid item xl={6} lg={6} md={7} sm={12} xs={12}>
        <Grid container direction="column">
          <LinkButton
            to="/news/1"
            variant="outlined"
            className={classes.button}
          >
            NEWS FEED
          </LinkButton>
          <LinkButton
            to="/profile/me"
            variant="outlined"
            className={classes.button}
          >
            DEVELOPER
          </LinkButton>
        </Grid>
      </Grid>
      <Grid item xl={6} lg={6} md={5} sm={12} xs={12}>
        <Grid container layout="column" wrap="nowrap">
          <Grid item xs={12}>
            <Typography
              variant="h1"
              align="left"
              className={classes.typography}
            >
              BLACK LIVES MATTER
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              className={classes.typography_subtitle}
            >
              The deeply rooted and systematic racial discrimination that is
              still unquestionably present towards the African/American / Black
              community is unacceptable.
            </Typography>
            <Typography
              variant="subtitle1"
              align="left"
              className={classes.typography_subtitle}
            >
              Racism, whether from an individual or an institution, should not
              exist in our society.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
