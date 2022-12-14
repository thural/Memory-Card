import React from "react";
import { createUseStyles } from "react-jss";
import Card from "../Card/Card";

const useStyles = createUseStyles({
  wrapper: {
    width: 'fit-content',
    margin:'0px',
    marginBottom: '24px',
    backgroundColor: 'deeppink',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: 'clamp(24px, 3vmin, 4vmin)',
    justifyContent: 'center',
    justifyItems: 'center',
    padding:'clamp(32px, 4vmin, 5vmin)',
    border: 'black solid 1px',
    borderRadius: '32px',
    
  }
});

const CardBoard = ({ cards, handleCard }) => {

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {
        cards.map(({ image, name }) => (<Card key={name} image={image} name={name} handleCard={handleCard}/>))
      }
    </div>
  )
}

export default CardBoard