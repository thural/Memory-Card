import React, {useState} from "react";
import { createUseStyles } from "react-jss";
import CardBoard from "./components/CardBoard/CardBoard";
import GameBoard from "./components/GameBoard/GameBoard";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

const imageSources = {};
function importAll(r) {
  r.keys().forEach((key) => (imageSources[key] = r(key)));
}
importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

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


const initialCards = Object.entries(imageSources)
.map(([key, value]) => ({
   'name': key.match(/\w+/)[0],
   'image': value
}));

const initialScores = {
   score: 0,
   best: 0
};

let clickedCards = [];

const App = () => {

   const [cards, setCards] = useState(initialCards);
   const [scores, setScores] = useState(initialScores);

   const classes = useStyles();

   

   const shuffleCards = () => {
      const cards = [...initialCards];
      const shuffledCards = [];
      while (cards.length > 0) {
         const randomIndex = Math.floor(Math.random() * cards.length);
         shuffledCards.push(cards.splice(randomIndex, 1)[0])
      };
      setCards(shuffledCards);
   }  

   const incrementScore = () => {
      setScores(({score, best}) => {
         return {
            'score': score + 1,
            'best': best
         }
   })};

   const gameOver = () => {
      setScores(({score, best}) => {
         return {
            'score': 0,
            'best': score > best ? score : best
         }});
      
      clickedCards = [];
   };

   const handleCard = (id) => {
      if (clickedCards.includes(id)) {
         gameOver();
         return
      };
      clickedCards.push(id);
      incrementScore();
      shuffleCards();
   };

   return (
      <div className={classes.wrapper}>
         <GameBoard>
            <ScoreBoard scores={scores} />
         </GameBoard>
         <CardBoard cards={cards} handleCard={handleCard}/>
      </div>
   );
};

export default App;