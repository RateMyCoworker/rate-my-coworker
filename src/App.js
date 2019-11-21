import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme';
import routes from './util/routes'

function App() {
  return (
    <HashRouter>
      <Provider store={store} >
        <ThemeProvider theme={theme} >
          <div className="App">
            <CssBaseline />
            {routes}
          </div>
        </ThemeProvider>
      </Provider>
    </HashRouter>
  );
}

export default App;