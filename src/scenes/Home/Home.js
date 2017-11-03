import React, { Component } from 'react';
import Article from '../../components/Article/';
import CHEditor from '../../components/Editor/';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Article>
        <CHEditor />
      </Article>
    );
  }
}

export default Home;
