
import React from 'react';
import ReactDOM from 'react-dom';

import './scss/application.scss';
import DemoBar from './demobar';
import * as serviceWorker from './serviceWorker';
import * as variables from './variables';

import Loadable from 'react-loadable';
import Loading from './src/Loading/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./app'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <DemoBar variables={variables} />,
  document.getElementById('demo-bar'),
);
