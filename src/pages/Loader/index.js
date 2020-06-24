import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grid: {
    textAlign: 'center',
    height: '100vh',
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      className={classes.grid}
      alignItems="center"
      justify="center"
    >
      <Box mx="auto" p={3}>
        <CircularProgress />
      </Box>
      <Box mx="auto">
        <Typography variant="caption" align="center">
          Loading Content !!
        </Typography>
      </Box>
    </Grid>
  );
};
export default Loader;
