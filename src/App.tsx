// Entry point.
import React from "react";
import ReactDOM from "react-dom/client";
import Message from './Message';

function App() {
  return (
    <div>
      <Message message="Hello" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, { key: "app" }));
