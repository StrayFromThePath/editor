import React, {
  PureComponent,
  Children,
  cloneElement
} from 'react';

export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // Индекс выбранной вкладки
      selectedTabIndex: 0,
    };
  }

  getAdditionalProps = (index, props) => ({
    handleClick: this.handleTabClick,
    tabIndex: index,
    selected: index === this.state.selectedTabIndex,
    ...props,
  });

  /**
   * Клонируем children(компоненты <Tab />),
   * добавляя в каждый нужные нам props:
   * - обработчик события клика;
   * - индекс вкладки
   * - флаг активности.
   */
  getChildrenTabsWithProps = () => {
    return Children.map(this.props.children, (child, index) =>
      cloneElement(
        child,
        this.getAdditionalProps(index, child.props)
      )
    );
  };

  /**
   * Рендерим контент активной вкладки
   */
  getActiveTabContent = () => {
    const { children } = this.props;
    const { selectedTabIndex } = this.state;
    const currentChildren = children[selectedTabIndex];

    if (currentChildren) {
      return currentChildren.props.children;
    }

    return false;
  };

  /**
   * Переключаем вкладки
   */
  handleTabClick = tabIndex => {
    this.setState({ selectedTabIndex: tabIndex });
  };

  render() {
    const childrenTabsWithProps = this.getChildrenTabsWithProps();
    const tabContent = this.getActiveTabContent();

    return (
      <div className="Tabs">
        <ul className="Tabs__list">{childrenTabsWithProps}</ul>
        <div className="Tabs__content">{tabContent}</div>
      </div>
    );
  }
}
