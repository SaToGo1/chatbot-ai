import { CSSProperties } from 'react'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import openAI from '../../assets/openAI.svg'
import { Link } from 'react-router-dom'
import { Link as MuiLink} from '@mui/material'
// import Header from "../Header.tsx"

export function InteractionSide () {
  return (
    <div style={interactionSideStyle}>
      <div style={top}>
        <Typography variant='h4' component='h2' sx={{ fontWeight: '600'}}>Get Started</Typography>
        <div style={accountPanel}>
          <Button variant='contained' size='large' component={Link} to='/login'>
            Log in
          </Button>
          <Button variant='contained' component={Link} to='/signup'>
            Sign Up
          </Button>
        </div>
      </div>
      <div style={bot}>
        <div style={iconDiv}>
          <img src={openAI} style={icon}></img>
          <Typography variant='h6'>
            UnlockedAI
          </Typography>
        </div>
        <div style={botLinksDiv}>
          <MuiLink href="#">Terms of use</MuiLink>
          <p> | </p>
          <MuiLink href="#">Privacy Policy</MuiLink>
        </div>
      </div>
    </div>
  )
}

const interactionSideStyle: CSSProperties = {
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
  flex: '1',
}

const icon: CSSProperties = {
  width: '22px',
}

const iconDiv: CSSProperties = {
  display: 'flex',
  marginTop: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
}

const botLinksDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
}