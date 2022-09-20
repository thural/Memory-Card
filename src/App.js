import React, {useState} from "react";
import CardBoard from "./components/CardBoard/CardBoard";

const imageSources = {};

function importAll(r) {
  r.keys().forEach((key) => (imageSources[key] = r(key)));
}

importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

const initialCards = Object.entries(imageSources)
.map(([key, value]) => ({
   'name': key.match(/\w+/)[0],
   'image': value
}));


const App = () => {

   const [cards, setCards] = useState(initialCards);


   return (
      <>
         <CardBoard cards={cards}/>
      </>
   );
};

export default App;