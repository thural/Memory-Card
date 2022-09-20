import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    wrapper: {
      boxSizing: 'border-box',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      '& header': {
        margin: '24px auto 32px 0px',
        display: 'flex',
        gap: '16px',
        flexDirection:'column',
      },
      '& h1': {
        margin: '0px',
        fontSize: 'clamp(24px, 4vmin, 6vmin)'
      },
      '& h3': {
        margin: '0px',
        fontSize: 'clamp(16px, 3vmin, 5vmin)'
      }
    }
  }
)




const GameBoard = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <header>
        <h1>Memory Game</h1>
        <h3>Click twice, You lose</h3>
      </header>
      {children}
    </div>
  )
}

export default GameBoard