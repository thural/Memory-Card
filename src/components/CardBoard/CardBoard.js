import React from "react";
import { createUseStyles } from "react-jss";
import Card from "../Card/Card";

const useStyles = createUseStyles({
  wrapper: {
    margin:'32px',
    padding:'16px',
    border: 'black solid 1px',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    
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