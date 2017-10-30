import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Heading, Logo } from 'chramework';
import { fetchPosts, fetchPostsIfNeeded } from '../../state/modules/posts';
import Post from '../../components/Post';

import styles from './style.scss';

// type Props = {
//   posts: PostsReducer,
//   fetchPostsIfNeeded: () => void,
// };

export class Home extends Component {
  static displayName = 'Home';

  static fetchData({ store }) {
    return store.dispatch(fetchPosts());
  }

  componentDidMount() {
    this.props.fetchPostsIfNeeded();
  }

  render() {
    return (
      <div>
        <Helmet title="Home" />
        <div className="row">
          <div className="column">
            <div className={styles.hero}>
              <Logo />
              <Heading>React Universal Boiler1 </Heading>
              <p>A server rendering React project.</p>
            </div>
          </div>
        </div>

        <div className="posts-list">
          {this.props.posts.list.map(p => (
            <div className="column column-30" key={p.id}>
              <Post title={p.title} body={p.body} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const connector = connect(
  ({ posts }) => ({ posts }),
  dispatch => ({
    fetchPostsIfNeeded: () => dispatch(fetchPostsIfNeeded()),
  }),
);

export default connector(Home);
