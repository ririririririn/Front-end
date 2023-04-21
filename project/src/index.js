import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <QueryClientProvider client={client}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </QueryClientProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
