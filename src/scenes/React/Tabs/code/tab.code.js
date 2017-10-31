import React, { PureComponent } from 'react';

export default class Tab extends PureComponent {
  handleClick = () => {
    // Вызываем родительский метод для переключения вкладки
    this.props.handleClick(this.props.tabIndex);
  };

  render() {
    return (
      <li
        className={`Tabs__item ${this.props.selected
          ? 'Tabs__item--selected'
          : ''}`
        }
        onClick={this.handleClick}
      >
        {this.props.title}
      </li>
    );
  }
}
