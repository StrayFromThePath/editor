import React from 'react';
import Draft, { Editor, EditorState, RichUtils } from 'draft-js';
import Article from '../../components/Article/';

const emptyContentState = Draft.convertFromRaw({
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

class MyEditor extends React.Component {
  constructor(props) {
    super(props);

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

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  };

  render() {
    return (
      <Article>
        <button onClick={this.onBoldClick}>Bold</button>
        <Editor
          editorKey="editor"
          handleKeyCommand={this.handleKeyCommand}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </Article>
    );
  }
}

export default MyEditor;
