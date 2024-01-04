import { Typography } from '@mui/material'
import HeaderLogin from '../components/header-login'
import { CSSProperties } from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
// import { FormControl, FormLabel } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <HeaderLogin />
      <div style={sectionStyle}>
          <form style={formStyle}>  {/* onSubmit={...}*/}
            <Typography style={h2Login} variant='h4' component='h1'>Welcome Back</Typography>
            <TextField 
              label='Email'
              InputLabelProps={{
                style: { color: 'black' }, // Set the text color to black
              }}
              color="secondary"
              type='email'
              variant='outlined'  
              sx={{mb: 3}}
              color='secondary'
              fullWidth
              // value={email} state
              // error={emailError} state
              // onChange ={e=>setEmail...}
              required
            />
            <TextField 
              label='Password'
              InputLabelProps={{
                style: { color: 'black' }, // Set the text color to black
              }}
              type='password'
              variant='outlined'  
              sx={{mb: 3}}
              color='secondary'
              fullWidth
              // value={password} state
              // error={passwordError} state
              // onChange ={e=>setPassword...}
              required
            />
            <Button variant='contained' color="secondary" type='submit'>Submit</Button>
          </form>
          <small style={letter}>Need an account? <Link to="/">Register here</Link></small>
      </div>
    </>
  )
}

const letter: CSSProperties = {
  color: 'black',
}

const sectionStyle: CSSProperties = {
  width: '100%', 
  height: 'calc(100% - 96px)', // 96 px -> height header
  padding: '80px',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'center', 
  alignItems: 'center',
  backgroundColor: 'white',
}

const formStyle: CSSProperties = {
  width: 'min(400px, 100%)',
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 40px 40px 40px',
}

const h2Login: CSSProperties = {
  alignSelf: 'center',
  fontWeight: '600',
  marginBottom: '20px',
  ...letter
}