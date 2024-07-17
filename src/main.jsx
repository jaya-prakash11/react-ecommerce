import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store, persistor } from "./Redux/Store/store.jsx";
import { Provider } from "react-redux";
import ToogleProvider from "./context/ToogleProvider.jsx";
import AuthProvider from "./context/authContext.jsx";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <ToogleProvider>
            <App />
          </ToogleProvider>
        </AuthProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
