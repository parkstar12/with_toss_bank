import React from "react";
import Header from "./component/Header";
import Inner from "./component/Inner";
// import Main from "./component/Main";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Inner />
      {/* <Main /> */}
    </div>
  );
};

export default App;
