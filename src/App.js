import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import RenderInput from './UserEventTest/RenderInput';
import './App.css';
import FrameworkList from './ListComponentTest/FrameworkList';
import UseEffectRender from './UseEffectRenderTest/UseEffectRender';
import MockServer from './ApiMockTest/MockServer';
import Redux from './IntegrationTest/Redux';
import ReduxAsync from './IntegrationAsyncThunkTest/ReduxAsync'
import CustomHooks from './CustomHookTest/CustomHooks';


function App() {

  const data = [{
    id:1,
    item:'React'
  },
  {
    id:2,
    item:'Angular'
  },
  {
    id:3,
    item:'Vue'
  },
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <RenderInput outputConsole={console.log} />
        <FrameworkList frameworks={data} />
        <UseEffectRender />
        <MockServer />
        <Redux />
        <ReduxAsync />
        <CustomHooks />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
