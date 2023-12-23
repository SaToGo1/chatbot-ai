import Typography from '@mui/material/Typography'
import { Link } from "react-router-dom"

export default function Logo () {
  return(
    <div 
      style={logoStyle}
    >
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Typography
          sx={typoStyle}
        >
            CloneGPT <span style={{ fontSize: '37px', width: '30px', height: '59px'}}>●</span>
        </Typography>
      </Link>
    </div>
  )
}

const logoStyle = {
  display: 'flex', 
  marginRight: 'auto', 
  alignItems: 'center', 
  gap: '8px'
}

const typoStyle = {
  fontWeight: "800",
  textShadow: '2px 2px 20px #000',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  color: 'var(--pink-color)' 
}
