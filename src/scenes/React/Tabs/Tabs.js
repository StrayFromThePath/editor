import React from 'react';
import Code from '../../../components/Code';
import Article from '../../../components/Article';
import tabs from './code/tabs.code';
import tab from './code/tab.code';

const Tabs = () => (
  <Article title="Элементы интерфейса на React. Выпуск #1. Табы.">
    <h1>Элементы интерфейса на&nbsp;React. Выпуск #1. Табы.</h1>
    <p>В&nbsp;этом уроке мы&nbsp;реализуем простой и&nbsp;гибкий компонент вкладок, позволяющий отобразить абсолютно любой контент внутри.</p>
    <Code>{tabs}</Code>
    <h2>Компонент {'<Tabs />'}</h2>
    <p>
     Он&nbsp;содержит состояние и&nbsp;знает, какая вкладка отображается в&nbsp;данный момент, обрабатывает изменения для отображения / скрытия других вкладок.
    </p>
    <h2>Компонент {'<Tab />'}</h2>
    <p>
      Его цель&nbsp;&mdash; просто отобразить вкладку, позволить указать заголовок и&nbsp;вызвать функцию родителя (компонент {''}) по&nbsp;событию onClick, передав в&nbsp;нее свой индекс.
    </p>
    <Code>{tab}</Code>
    <h2>Вывод</h2>
    <p>
      Нам удалось реализовать простой компонент вкладок на&nbsp;React с&nbsp;малым количеством кода, который легко поддерживать и&nbsp;улучшать.
    </p>
    <p>
      Работу компонентов и&nbsp;весь код вы&nbsp;можете посмотреть в&nbsp;<a href="https://codesandbox.io/s/x983vr308o" target="_blank" rel="noopener noreferrer">интерактивном демо</a>. Также, в&nbsp;качестве дополнительной практики, можно реализовать возможность указывать
      активную вкладку по&nbsp;умолчанию.
    </p>
    <p>
      Все ваши вопросы и&nbsp;замечания вы&nbsp;можете писать на&nbsp;<a href="mailto:ask@deep.digital">ask@deep.digital</a>.
    </p>
    <h2>Полезные ссылки</h2>
    <ol>
      <li>
        <a
          href="https://reactjs.org/docs/react-api.html#reactchildren"
          target="_blank"
          rel="noopener noreferrer">
          React.Children
        </a>
      </li>
      <li>
        <a
          href="https://reactjs.org/docs/react-api.html#cloneelement"
          target="_blank"
          rel="noopener noreferrer">
          React.cloneElement()
        </a>
      </li>
      <li>
        <a href="https://codesandbox.io" target="_blank" rel="noopener noreferrer">
          Codesandbox.io
        </a>&nbsp;&mdash; <nobr>онлайн-редактор</nobr> для React, Preact, Vue.
      </li>
      <li>
        <a href="https://stackblitz.com" target="_blank" rel="noopener noreferrer">
          StackBlitz
        </a>&nbsp;&mdash; Online VS&nbsp;Code IDE for Angular & React.
      </li>
    </ol>
  </Article>
);

export default Tabs;
