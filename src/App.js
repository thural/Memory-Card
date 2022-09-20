import React, {useState} from "react";
import { createUseStyles } from "react-jss";
import CardBoard from "./components/CardBoard/CardBoard";
import GameBoard from "./components/GameBoard/GameBoard";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

const useStyles = createUseStyles(
   {
      wrapper: {
         margin: '0 auto 0 auto',
         width: 'fit-content',
         display: 'grid',
         justifyContent: 'center',
         justifyItems: 'center',
         gridTemplate: '1fr / auto',
      }
   }
);

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

const initialScores = {
   score: 0,
   best: 0
};


const App = () => {

   const [cards, setCards] = useState(initialCards);
   const [scores, setScores] = useState(initialScores);
   const classes = useStyles();
   return (
      <div className={classes.wrapper}>
         <GameBoard>
            <ScoreBoard scores={scores} />
         </GameBoard>
         <CardBoard cards={cards}/>
      </div>
   );
};

export default App;