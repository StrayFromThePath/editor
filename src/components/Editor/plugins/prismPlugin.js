import React from 'react';
import PrismDecorator from 'draft-js-prism';

const prismPlugin = options => {
  if (!options || !options.prism) {
    throw new Error(
      'You must provide an instance of the prism.js library to draft-js-prism-plugin. See the documentation at https://github.com/withspectrum/draft-js-prism-plugin for more information!',
    );
  }
  const { prism, defaultSyntax } = options;
  return {
    decorators: [
      new PrismDecorator({
        prism,
        defaultSyntax,
        render({ type, children }) {
          return <span className={`prism-token token ${type}`}>{children}</span>;
        },
      }),
    ],
  };
};

export default prismPlugin;
