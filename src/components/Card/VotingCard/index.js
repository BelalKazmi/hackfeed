import React, { useState, useContext, useEffect } from 'react';
import CountUp from 'react-countup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import { DataContext } from './../../../App';
import actionTypes from '../../../actions';

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: [[theme.spacing(2), theme.spacing(1)]],
    borderRadius: '30%',
    height: '75%',
    width: '75%',
    border: '0.25em solid transparent',
    boxShadow: '0 0 0.125em 0.125em rgba(0, 0, 0, 0.5)',
  },
  typography_roll_up: {
    fontSize: '2.5em',
    fontWeight: 600,
  },
}));

const VotingCard = ({ id, page }) => {
  const classes = useStyles();
  const [voteCount, setVoteCount] = useState(0);
  const [storyState, setStoryState] = useState([]);
  const { state, dispatch } = useContext(DataContext);

  useEffect(() => {
    const story = state.data[parseInt(page)].filter(
      (story) => story.objectID === id
    );
    setStoryState(story[0]);
    setVoteCount(story[0].points);
  }, [id, state.data, page]);

  const upVoted = (points) => {
    const data = state.data;
    data[parseInt(page)][
      state.data[parseInt(page)].indexOf(storyState)
    ].points = points;

    dispatch({
      type: actionTypes.setData,
      payload: {
        page: page,
        data: data[page],
      },
    });
  };

  return (
    <Grid container>
      <Grid item xs={8}>
        <Grid container className={classes.grid}>
          <Grid item xs={12}>
            {voteCount && (
              <CountUp
                start={voteCount}
                end={voteCount}
                className={classes.typography_roll_up}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" align="center" noWrap={true}>
              UpVotes
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <IconButton
              aria-label="delete"
              className={classes.margin}
              onClick={() => upVoted(voteCount + 1)}
            >
              <ThumbUpAltRoundedIcon fontSize="large" color="secondary" />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <IconButton aria-label="delete" className={classes.margin}>
              <VisibilityOffRoundedIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VotingCard;
