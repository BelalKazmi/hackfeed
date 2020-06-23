import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import EventIcon from '@material-ui/icons/Event';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';
import AvatarCard from './AvatarCard';
import InfoCard from './InfoCard';
import CommentNumeralCard from './CommentNumeralCard';
import VotingCard from './VotingCard';

const useStyles = makeStyles((theme) => ({
  grid: {
    height: '100%',
  },
  link: {
    textDecoration: 'none',
    '&:hover, &:focus, &:visited, &:link, &:active': {
      textDecoration: 'none',
    },
  },
}));

const Card = ({ data, page }) => {
  const classes = useStyles();
  return (
    <Grid container>
      {data[page].map((story, key) => {
        return (
          story && (
            <Fade in={true} timeout={1000}>
              <Grid item xs={12} key={key}>
                <Box boxShadow={5} m={2} p={1}>
                  <Grid container id={story.objectID}>
                    <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems="center"
                        className={classes.grid}
                      >
                        <Grid item xs={4}>
                          <AvatarCard author={story.author} />
                        </Grid>
                        <Grid item xs={8} align="left">
                          <Link
                            target="_blank"
                            href={story.url}
                            className={classes.link}
                          >
                            <InfoCard title={story.title} tag={story._tags} />
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                      <Grid
                        container
                        justify="space-evenly"
                        alignItems="center"
                      >
                        <Grid item xs={3}>
                          <CommentNumeralCard comments={story.num_comments} />
                        </Grid>
                        <Grid item xs={6}>
                          <VotingCard id={story.objectID} page={page} />
                        </Grid>
                      </Grid>
                      <Grid container justify="flex-end" alignItems="flex-end">
                        <Grid item>
                          <EventIcon />
                        </Grid>
                        <Grid item xs={3}>
                          <Typography variant="h6">{`${new Date(
                            story.created_at
                          ).toLocaleDateString()}`}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Fade>
          )
        );
      })}
    </Grid>
  );
};

export default Card;
