import React, { PureComponent } from 'react';

export default class StyleButton extends PureComponent {
  onToggle = e => {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  };

  render() {
    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }
    return (
      <button className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </button>
    );
  }
}
