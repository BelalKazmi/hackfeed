import React from 'react';
import { Grid, Icon, Label, Message } from 'semantic-ui-react';

export default () => {
  return (
    <Grid>
      <Message>
        <Message.Header>
          <Icon name="linkedin" />
          Have you heard about Belal Ali Kazmi?
        </Message.Header>
        <Message.Content>
          <Label
            as="a"
            href="https://www.linkedin.com/in/belalkazmi/"
            target="_blank"
          >
            Click to Connect
          </Label>
        </Message.Content>
      </Message>
    </Grid>
  );
};
