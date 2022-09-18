import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    width:'300px',
    height:'330px',
    border: 'black solid 1px',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& .text': {
      borderTop: '1px solid black',
      width: '100%',
    },
    '& h1': {
      textAlign:'center',
      margin: '10px'
    }
  }
})

const Card = ({image, name}) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <img src={image}></img>
      <div className="text"><h1>{name}</h1></div>
    </div>
  )
}

export default Card