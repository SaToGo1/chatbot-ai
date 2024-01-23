import { Avatar, Button, Typography } from "@mui/material";
import { CSSProperties } from "react";
import { useAuth } from "../../context/auth-context";

export default function UserPanel() {
  const auth = useAuth()
  return (
    <Button sx={{ width: '100%', justifyContent: 'flex-start' }}>
      <div style={userAvatarDiv}>
        <Avatar sx={avatarStyle}>
          {auth?.user?.name[0] }{auth?.user?.name.split('')[1][0]}
        </Avatar>
        <Typography>{auth?.user?.name}</Typography>
      </div>
    </Button>
  )
}

const userAvatarDiv: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

const avatarStyle = {
  bgcolor: 'white', 
  color: 'black', 
  fontWeight: 700
}
