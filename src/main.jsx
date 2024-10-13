// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import App from "./App.jsx";
// // import "./index.css";

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // src/main.jsx

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App";
// // 1. Імпортуємо провайдер
// import { Provider } from "react-redux";
// // 2. Імпортуємо створений раніше стор
// import { store } from "./redux/store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// src/main.jsx

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./components/App";
// // 1. Імпортуємо провайдер
// import { Provider } from "react-redux";
// // 2. Імпортуємо створений раніше стор
// import { store } from "./redux/store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
