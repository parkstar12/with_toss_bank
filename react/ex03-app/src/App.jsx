import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Main />
    </div>
  );
};

export default App;
