import React from "react";
import Card from "./components/Card/Card"
import neptune from "./neptune.png"

const App = () => {
   return (
      <>
         <Card image={neptune} name={"neptune"} />
      </>
   );
};

export default App;