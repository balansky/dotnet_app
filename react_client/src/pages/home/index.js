import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../share/store'
import { Provider } from 'react-redux'
import { Counter } from '../../share/features/counter/Counter'
import Button from '@mui/material/Button';
import Layout1 from '../../layouts/layout1/Layout1'
import { StyledEngineProvider } from '@mui/material/styles';


function App() {
  return (
        <StyledEngineProvider injectFirst> 
            <Layout1 />
            <Counter />
        </StyledEngineProvider>
  ) 
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('home-root')
);