import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import loadNewsFeed from '../../helpers/loadNewsFeed';
import { DataContext } from './../../App';
import actionTypes from '../../actions';

const NewsFeed = (props) => {
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
    return (
      <ul>
        {state.data[props.match.params.page].map((story, key) => (
          <li id={story.objectID} key={key}>
            {story.title}
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

NewsFeed.propTypes = {
  staticContext: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default NewsFeed;
