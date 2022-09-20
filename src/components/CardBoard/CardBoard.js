import React from "react";
import { createUseStyles } from "react-jss";
import Card from "../Card/Card";

const useStyles = createUseStyles({
  wrapper: {
    diplay: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(128px, 150px))',
    gridTemplateRows: 'repeat(auto-fill, auto)',
    gap: '16px',
    margin:'auto',
    padding:'16px',
    border: 'black solid 1px',
    borderRadius: '16px',
    
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