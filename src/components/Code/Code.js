import React from 'react';
import { bool, string, node } from 'prop-types';
import 'prismjs';
import { PrismCode } from 'react-prism';

import 'prismjs/themes/prism.css';
import styles from './style.scss';

const Code = ({ language, children, hasError }) => {
  return (
    <div className={`${styles.Code} ${hasError ? `${styles.Code_error}` : ''}`}>
      <PrismCode component="pre" className={`language-${language}`}>
        {children}
      </PrismCode>
    </div>
  );
};

Code.defaultProps = {
  hasError: false,
  language: 'javascript',
};

Code.propTypes = {
  hasError: bool,
  language: string,
  children: node.isRequired,
};

export default Code;
