import React from 'react';
import { node, string } from 'prop-types';
import Helmet from 'react-helmet';
import Text from '../Text';
import styles from './style.scss';

const Article = ({ children, title }) => (
  <article className={styles.Article}>
    <Helmet title={title} />
    <div className={styles.Article__content}>
      <Text>{children}</Text>
    </div>
  </article>
);

Article.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
};

export default Article;
