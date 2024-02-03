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
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        
      <BrowserRouter basename="/goit-react-phonebook">
        <GoogleOAuthProvider clientId="1065782230402-etabun5jeat15issen1ea0r75881kj2s.apps.googleusercontent.com">
      {/* <ThemeProvider theme={theme}> */}
      <App />
        {/* </ThemeProvider> */}
        </GoogleOAuthProvider>
     </BrowserRouter>
        </PersistGate>
    </Provider>
  // </React.StrictMode>
);
