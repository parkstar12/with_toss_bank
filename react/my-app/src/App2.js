import React from "react";
import Libaray from "./2-jsx/Libaray";
import { Hello, Add, DrinkMachine, Greeting } from "./2-jsx/Ex";
function App() {
  // return <Libaray />;
  // return (
  //   <MainApp>
  //     <Header />
  //     <Nav />
  //     <Main>
  //       <Section />
  //       <Aside />
  //     </Main>
  //     <Footer />
  //   </MainApp>
  // );

  //#1
  return (
    <>
      <Hello name="박준영" />
      <Add num1={1} num2={2} />
      <DrinkMachine price={2000} />
      <Greeting hour={14} />
    </>
  );
}

export default App;
