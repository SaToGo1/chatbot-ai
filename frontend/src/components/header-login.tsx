import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import icon from '../assets/openAI-black.svg'
import { CSSProperties } from 'react'

export default function HeaderLogin() {
    return (
        <AppBar 
            sx={{ bgcolor: 'white', position: 'static', boxShadow: 'none', display: 'flex', alignItems: 'center', paddingTop: '32px' }}
        >
            <Toolbar
                sx={{ display: 'flex' }}
            >
                <img src={icon} style={iconStyle} />
            </Toolbar>
        </AppBar>
    )
}

const iconStyle: CSSProperties = {
    width: '32px',
}