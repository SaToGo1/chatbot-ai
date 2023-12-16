import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Logo from './Logo'

export default function Header() {
    return (
        <AppBar 
            sx={{ bgcolor: 'transparent', position: 'static', boxShadow: 'none' }}
        >
            <Toolbar
                sx={{ display: 'flex' }}
            >
                <Logo />
            </Toolbar>
        </AppBar>
    )
}
