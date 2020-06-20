import React from 'react';
import loadNewsFeed from '../../helpers/loadNewsFeed';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    if (props.staticContext && props.staticContext.data) {
      this.state = {
        data: props.staticContext.data,
      };
    } else {
      this.state = {
        data: [],
      };
    }
  }

  componentDidMount() {
    setTimeout(() => {
      if (window.__ROUTE_DATA__) {
        this.setState({
          data: window.__ROUTE_DATA__,
        });
        delete window.__ROUTE_DATA__;
      } else {
        loadNewsFeed(this.props.match.params.page).then((res) => {
          this.setState({
            data: res,
          });
        });
      }
    }, 0);
  }

  render() {
    const { data } = this.state;
    return (
      <ul>
        {data.map((story, key) => (
          <li id={story.objectID} key={key}>
            {story.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default NewsFeed;
