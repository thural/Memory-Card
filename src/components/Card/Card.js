import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    width:'128px',
    height:'150px',
    border: 'black solid 1px',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& img':{
      maxWidth: '100%',
      maxHeight: '100%'
    },
    '& .text': {
      borderTop: '1px solid black',
      width: '100%',
    },
    '& h3': {
      textAlign:'center',
      margin: '0px'
    }
  }
})

const Card = ({image, name}) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <img src={image}></img>
      <div className="text"><h3>{name}</h3></div>
    </div>
  )
}

export default Card