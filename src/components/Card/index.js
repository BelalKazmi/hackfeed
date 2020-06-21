import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import { makeStyles } from '@material-ui/core/styles';
import AvatarCard from './AvatarCard';
import InfoCard from './InfoCard';
import CommentNumeralCard from './CommentNumeralCard';
import VotingCard from './VotingCard';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: [theme.spacing(1)],
  },
  typography_date: {
    width: '100%',
  },
}));

const Card = ({ data }) => {
  const classes = useStyles();
  return (
    <Box m={2}>
      {data.map((story, key) => (
        <Grid container id={story.objectID} key={key} className={classes.root}>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <AvatarCard author={story.author} />
              </Grid>
              <Grid item xs={8} align="left">
                <InfoCard
                  title={story.title}
                  url={story.url}
                  tag={story._tags[0]}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Grid container>
              <Grid item xs={4}>
                <CommentNumeralCard comments={story.num_comments} />
              </Grid>
              <Grid item xs={8}>
                <VotingCard />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Chip
                variant="outlined"
                size="small"
                icon={<CalendarTodayOutlinedIcon />}
                label={`${new Date(story.created_at)}`}
                color="primary"
                className={classes.typography_date}
              />
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Card;
