import React, {useState} from "react";
import CardBoard from "./components/CardBoard/CardBoard";
import neptune from "./neptune.png"

const initialCards = [
   {
      'name':'neptune',
      'image': neptune
   },
]





const App = () => {

   const [cards, setCards] = useState(initialCards);


   return (
      <>
         <CardBoard cards={cards}/>
      </>
   );
};

export default App;