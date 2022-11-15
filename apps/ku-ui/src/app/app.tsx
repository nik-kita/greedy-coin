
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import './app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/root.store';



export function App() {

  return (
    <Provider store={store}>
      <div role="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div><Link to="/">Home</Link></div>
          }
        />
      </Routes>
    </Provider>);
}

export default App;
