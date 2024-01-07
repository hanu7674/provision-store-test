import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { Provider } from 'react-redux';
import {NotificationsProvider} from 'reapop';
import configureStore from './redux/configureStore';
import Main from './pages';
import './App.css'
const store = configureStore();

window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth'
});
window.scrollBy({ 
  top: 100, 
  left: 0, 
  behavior: 'smooth' 
});

const  App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
      <Provider store={store}>
          <NotificationsProvider>
            <Main />
          </NotificationsProvider>
      </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;