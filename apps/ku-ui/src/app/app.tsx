
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import './app.module.css';
import { configureStore } from '@reduxjs/toolkit';
import { Route, Routes, Link } from 'react-router-dom';
import { rootReducer } from './state/root.reducer';
import { Provider } from 'react-redux';
import { Handlebar } from './state/handlebar/handlebar.component';

const store = configureStore({
  reducer: rootReducer,
});


export function App() {

  return (
    <Provider store={store}>
      <Handlebar/>
      <>
        <div />
        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <br />
        <hr />
        <br />
        <div role="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page-2">Page 2</Link></li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>This is the generated root route. <Link to="/page-2">Click here for page 2.</Link></div>
            }
          />
          <Route
            path="/page-2"
            element={
              <div><Link to="/">Click here to go back to root page.</Link></div>
            }
          />
        </Routes>
        {/* END: routes */}
      </>
    </Provider>);

}


export default App;
