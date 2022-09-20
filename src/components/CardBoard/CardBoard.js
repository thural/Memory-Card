import React from "react";
import { createUseStyles } from "react-jss";
import Card from "../Card/Card";

const useStyles = createUseStyles({
  wrapper: {
    width: 'fit-content',
    margin:'auto',
    backgroundColor: 'deeppink',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '24px',
    justifyContent: 'center',
    justifyItems: 'center',
    padding:'32px',
    border: 'black solid 1px',
    borderRadius: '32px',
    
  }
})

const CardBoard = ({ cards }) => {

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {
        cards.map(({ image, name }) => (<Card key={name} image={image} name={name} />))
      }
    </div>
  )
}

export default CardBoard