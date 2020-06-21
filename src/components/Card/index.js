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
  typography_date: {
    width: '100%',
  },
}));

const Card = ({ data, page }) => {
  const classes = useStyles();
  return (
    <Grid container>
      {data[page].map((story, key) => (
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} key={key}>
          <Box boxShadow={2} m={3} p={1}>
            <Grid container id={story.objectID}>
              <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <Grid container>
                  <Grid item xs={4}>
                    <AvatarCard author={story.author} />
                  </Grid>
                  <Grid item xs={8} align="left">
                    <InfoCard
                      title={story.title}
                      url={story.url}
                      tag={story._tags}
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
                    <VotingCard id={story.objectID} page={page} />
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <Grid item xl={12} lg={12} md={12} sm={8} xs={6}>
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
            </Grid>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Card;
