import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <GoogleOAuthProvider clientId="54841711292-qbeh5qfir580b06prfprepojjgtr7icj.apps.googleusercontent.com">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
      <BrowserRouter basename="/goit-react-phonebook">
      {/* <ThemeProvider theme={theme}> */}
      <App />
        {/* </ThemeProvider> */}
     </BrowserRouter>
        </PersistGate>
    </Provider>
        </GoogleOAuthProvider>
  </React.StrictMode>
);
