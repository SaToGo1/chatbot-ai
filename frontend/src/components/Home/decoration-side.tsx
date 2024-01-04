import { CSSProperties } from 'react';
import { Typography } from "@mui/material"
import Header from "../Header.tsx"

export function DecorationSide () {
  return (
    <div style={decorationSideStyle}>
      <Header />
      <div style={decorationTextDiv}>
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

const decorationSideStyle: CSSProperties = {
  height: '100%',
  backgroundColor: 'rgb(0, 0, 46)',
  color: 'var(--pink-color)',
}

const decorationTextDiv: CSSProperties = {
  position: 'absolute',
  top: 'calc(50% - 80px)',
}

// const leftText = {
//   position: 'absolute',
//   Top: '5000px',
// }

