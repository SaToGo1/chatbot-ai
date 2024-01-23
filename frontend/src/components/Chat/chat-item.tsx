import { CSSProperties } from "react";
import icon from '../../assets/openAI.svg'
import { Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/auth-context";

import { ContentStyle, contentLayerTwo, Item } from "./chat-style";

export default function ChatItem({content, role}:{content:string, role:'user' | 'assistant'}) {
  const auth = useAuth()

  return role === 'assistant' 
  ? 
    <div style={ContentStyle}>
      <div style={contentLayerTwo}>
        <div style={Item}>
          <div>
            <Avatar sx={{ml: '0', width: '30px', height: '30px', bgcolor: 'black', color: 'white'}}>
              <img src={icon} alt='clonegpt' width={'30px'} />
            </Avatar>
          </div>
          <div>
            <Typography fontSize={'16px'} fontWeight={'600'}>CloneGPT</Typography>
            <Typography fontSize={'16px'}>{content}</Typography>
            <div style={gap}></div>
          </div>
        </div>
      </div>
    </div> 
  : 
    <div style={ContentStyle}>
      <div style={contentLayerTwo}>
        <div style={Item}>
          <div>
            <Avatar sx={{ml: '0', width: '30px', height: '30px', bgcolor: 'black', color: 'white'}}>
              {auth?.user?.name[0] }{auth?.user?.name.split('')[1][0]}
            </Avatar>
          </div>
          <div>
          <Typography fontSize={'16px'} fontWeight={'600'}>You</Typography>
            <Typography fontSize={'16px'}>{content}</Typography>
            <div style={gap}></div>
          </div>
        </div>
      </div>
    </div>
}

// const ContentStyle: CSSProperties = {
//   width: '100%',
// }

// const contentLayerTwo: CSSProperties = {
//   width: '100%',
//   padding: '8px 16px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center'
// }

// const Item: CSSProperties = {
//   flexBasis: '640px',
//   display: 'flex',
//   padding: '0px 4px', // 20 px when -> 1280px TODO
//   gap: '20px'
// }

const gap: CSSProperties = {
  height: '26px'
}
