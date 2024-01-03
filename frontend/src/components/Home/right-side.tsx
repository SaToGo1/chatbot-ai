import { CSSProperties } from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import openAI from '../../assets/openAI.svg'
// import Header from "../Header.tsx"

export function RightSide () {
  return (
    <div style={rightSideStyle}>
      <div style={top}>
        <Typography variant='h4' component='h2' sx={{ fontWeight: '600'}}>Get Started</Typography>
        <div style={accountPanel}>
          <Button variant='contained' size='large'>
            Log in
          </Button>
          <Button variant='contained'>
            Sign Up
          </Button>
        </div>
      </div>
      <div style={bot}>
        <div><img src={openAI}></img></div>
        <div>terms ...</div>
      </div>
    </div>
  )
}

const rightSideStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 24px',
}

const top: CSSProperties = {
  flex: '4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const accountPanel: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
  margin: '20px 0 0 0',
  gap: '12px',
  width: '100%',
  maxWidth: '440px',
}

const bot: CSSProperties = {
  border: '1px solid black',
  flex: '1',
}