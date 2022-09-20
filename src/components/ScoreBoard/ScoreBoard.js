import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      margin: '32px 0px 32px 32px',
    }
  }
)

const ScoreBoard = ({scores}) => {
  
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h3>Best: {scores.best}</h3>
      <h3>Score: {scores.score}</h3>
    </div>
  )
}

export default ScoreBoard

