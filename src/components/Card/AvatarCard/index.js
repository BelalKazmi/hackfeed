import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createAvatarComponent, GithubSource } from 'react-avatar';

const Avatar = createAvatarComponent({
  sources: [GithubSource],
});

const AvatarCard = ({ author }) => (
  <Grid container>
    <Grid item xs={12}>
      <Avatar githubHandle={author} size={96} value={author} round={true} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="subtitle2" align="center">
        {author}
      </Typography>
    </Grid>
  </Grid>
);

export default AvatarCard;
