import Typography from '@mui/material/Typography'
import { Link } from "react-router-dom"

export default function Logo () {
  return(
    <div 
      style={{
        display: 'flex', 
        marginRight: 'auto', 
        alignItems: 'center', 
        gap: '8px'
      }}
    >
      <Link to={'/'} style={{ textDecoration: 'none' }}>
        <Typography
          sx={{
            fontWeight: "800",
            textShadow: '2px 2px 20px #000',
            fontSize: '20px'
          }}
        >
            CloneGPT <span style={{ fontSize: '30px'}}>●</span>
        </Typography>
      </Link>
    </div>
  )
}
