import React, { Component } from 'react';
// import Immutable from 'immutable';
import Editor from 'draft-js-plugins-editor';
import { EditorState, RichUtils, convertFromRaw } from 'draft-js';
import { handleNewLine } from 'draftjs-utils';
import createBlockBreakoutPlugin from 'draft-js-block-breakout-plugin';
import Prism from 'prismjs';
import 'draft-js/dist/Draft.css';
import 'prismjs/themes/prism.css';
import createPrismPlugin from './plugins/prismPlugin';
import BlockControls from './BlockControls';
import styles from './style.scss';

const prismPlugin = createPrismPlugin({
  defaultSyntax: 'javascript',
  prism: Prism,
});
const blockBreakoutPlugin = createBlockBreakoutPlugin();

const plugins = [prismPlugin, blockBreakoutPlugin];

class CHEditor extends Component {
  constructor(props) {
    super(props);

    const emptyContentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          text: '',
          key: 'foo',
          type: 'unstyled',
          entityRanges: [],
        },
      ],
    });

    // const decorator = new PrismDraftDecorator({
    //   defaultSyntax: 'javascript',
    //   render: ({ type, children }) => (
    //     <span className={`prism-token token ${type}`}>{children}</span>
    //   )
    // });

    this.state = {
      editorState: EditorState.createWithContent(emptyContentState),
    };
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  onChange = editorState => {
    this.setState({ editorState });
  };

  toggleBlockType = blockType => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  };

  toggleInlineStyle = inlineStyle => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
  };

  handleReturn = () => {
    const editorState = handleNewLine(this.state.editorState, event);
    if (editorState) {
      this.onChange(editorState);
      return true;
    }
    return false;
  };

  getBlockStyle = block => {
    switch (block.getType()) {
      case 'unstyled':
        return 'paragraph';
      case 'code-block':
        return 'javascript';
      default:
        return null;
    }
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className={styles.CHEditor}>
        <BlockControls editorState={editorState} onToggle={this.toggleBlockType} />
        <Editor
          editorKey="editor"
          handleKeyCommand={this.handleKeyCommand}
          editorState={editorState}
          onChange={this.onChange}
          blockStyleFn={this.getBlockStyle}
          // handleReturn={this.handleReturn}
          plugins={plugins}
        />
      </div>
    );
  }
}

export default CHEditor;
