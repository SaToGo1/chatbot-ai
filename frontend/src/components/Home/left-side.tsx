import { CSSProperties } from 'react';
import { Typography } from "@mui/material"
import Header from "../Header.tsx"

export function LeftSide () {
  return (
    <div style={leftSideStyle}>
      <Header />
      <div style={leftTextDiv}>
        <Typography variant='h2' color={pinkColor} >
          Text 1
        </Typography>
        <Typography variant='h2' color={pinkColor} >
          Text 2
        </Typography>
      </div>
    </div>
  )
}

const pinkColor = 'var(--pink-color)'

const leftSideStyle: CSSProperties = {
  height: '100%',
  backgroundColor: 'rgb(0, 0, 46)',
  color: 'var(--pink-color)',
}

const leftTextDiv: CSSProperties = {
  position: 'absolute',
  top: 'calc(50% - 80px)',
}

// const leftText = {
//   position: 'absolute',
//   Top: '5000px',
// }

