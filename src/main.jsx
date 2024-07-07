import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./Redux/Store/store.jsx";
import { Provider } from "react-redux";
import ToogleProvider from "./context/ToogleProvider.jsx";
import AuthProvider from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ToogleProvider>
          <App />
        </ToogleProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
