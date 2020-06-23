import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import loadNewsFeed from '../../helpers/loadNewsFeed';
import { DataContext } from './../../App';
import actionTypes from '../../actions';
import Card from '../../components/Card';
import LinkButton from '../../components/LinkButton';
import LineChart from '../../components/Chart';

const useStyles = makeStyles((theme) => ({
  grid: {
    textAlign: 'center',
    height: '100vh',
  },
  linkButton: {
    width: '100%',
  },
  gridChart: {
    margin: [[theme.spacing(4), 0]],
  },
}));

const NewsFeed = (props) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    if (props.staticContext && props.staticContext.data) {
      dispatch({
        type: actionTypes.setData,
        payload: {
          page: props.match.params.page,
          data: props.staticContext.data,
        },
      });
    }
    setTimeout(() => {
      if (window.__ROUTE_DATA__) {
        dispatch({
          type: actionTypes.setData,
          payload: {
            page: props.match.params.page,
            data: window.__ROUTE_DATA__,
          },
        });
        delete window.__ROUTE_DATA__;
      } else if (!state.data[props.match.params.page]) {
        loadNewsFeed(props.match.params.page).then((res) => {
          dispatch({
            type: actionTypes.setData,
            payload: {
              page: props.match.params.page,
              data: res,
            },
          });
        });
      }
    }, 0);
  }, [dispatch, state.data, props.staticContext, props.match.params.page]);

  if (state.data[props.match.params.page]) {
    const storyData = state.data[props.match.params.page];
    const upVotesArray = storyData
      .filter((data) => data !== undefined)
      .map((story) => story.points);
    const userIdArray = storyData
      .filter((data) => data !== undefined)
      .map((story) => parseInt(story.objectID))
      .reverse();
    return (
      <Grid container direction="column" wrap="nowrap" className={classes.grid}>
        <Grid item xs={12}>
          <Card data={state.data} page={parseInt(props.match.params.page)} />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-around">
            <Grid item xs={4}>
              <LinkButton
                to={`/news/${parseInt(props.match.params.page) - 1}`}
                variant="outlined"
                disabled={props.match.params.page === '1'}
                className={classes.linkButton}
              >
                PREV
              </LinkButton>
            </Grid>
            <Grid item xs={4}>
              <LinkButton
                to={`/news/${parseInt(props.match.params.page) + 1}`}
                variant="outlined"
                className={classes.linkButton}
              >
                NEXT
              </LinkButton>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridChart}>
            <LineChart {...{ upVotesArray, userIdArray }} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container direction="column" wrap="nowrap" className={classes.grid}>
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
  }
};

NewsFeed.propTypes = {
  staticContext: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default NewsFeed;
