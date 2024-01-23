// import { Avatar, Box, Button, Typography } from "@mui/material";
import { CSSProperties } from "react";
// import { useAuth } from "../context/auth-context";
import UserPanel from "../../components/Chat/user-panel";
import ChatItem from "../../components/Chat/chat-item";

import { ContentStyle, contentLayerTwo, Item } from '../../components/Chat/chat-style';
import { IconButton, Typography } from "@mui/material";

import { IoMdSend } from 'react-icons/io'

export default function Chat() {
  // const auth = useAuth()
  return (
    <div style={mainStyle}>
      <div style={leftStyle}>
        <nav style={nav}>
          <div>Chats</div>
          <div style={userDiv}>
            <UserPanel />
          </div>
        </nav>
      </div>
      <div style={rightStyle}>
        <section style={sectionStyle}>
          <div style={ChatDisplayDiv}>
            {staticChats.map((chat, index) => (
              <ChatItem content={chat.content} role={chat.role} key={index} />
            ))}
          </div>
          <div style={{...ContentStyle, flex: '1 1 0'}}>
            <div style={contentLayerTwo}>
              <div style={{...Item, ...flexColumn}}>
                <div style={inputDiv}>
                  {/* <textarea style={inputStyle} /> */}
                  <span className="textarea" role="textbox" contentEditable></span>
                  <IconButton sx={{ml: 'auto', color: 'white', position: 'sticky', top: 'calc(50% - 20px)'}}><IoMdSend></IoMdSend></IconButton>
                </div>
                <Typography sx={{fontSize: '10px'}}>CloneGPT can make mistakes. Consider checking important information.</Typography>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const mainStyle: CSSProperties = {
  width: '100%', 
  height: '100%',
  display: 'flex',
}

const leftStyle: CSSProperties = {
  flexShrink: '0',
  width: '260px',
  overflowX: 'hidden',
  display: 'flex',
  backgroundColor: '#000000'
}

  const nav: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '14px 12px',
  }

  const userDiv: CSSProperties = {
    marginTop: 'auto',
    padding: '8px',
  }

const rightStyle: CSSProperties = {
  maxWidth: '100%',
  flex: '1 1 0%',
  overflow: 'hidden',
  backgroundColor: '#343541',
}

  const sectionStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }

  const ChatDisplayDiv: CSSProperties = {
    flex: '10 1 0',
    overflow: 'scroll',
    overflowX: 'hidden',
    overflowY: 'auto',
    scrollBehavior: 'smooth', 
  }

  const flexColumn: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px'
  }

  const inputDiv: CSSProperties = {
    minHeight: '52px',
    maxHeight: '170px',
    width: '100%', 
    backgroundColor: 'transparent', 
    //padding: '14px 48px 14px 16px', 
    padding: '0', 
    border: '1px solid #d9d9e3',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'scroll',
    overflowX: 'hidden',
    overflowY: 'auto',
  }

  const inputStyle: CSSProperties = {
    minHeight: '20px',
    width: '100%', 
    backgroundColor: 'transparent', 
    border: 'none',
    outline: 'none',
    padding: '7px 0px 7px 16px',
    borderRadius: '16px',
    color: 'white', 
    fontSize: '20px',
  }

// Define an array of static chat messages
const staticChats = [
  // User initiates the conversation
  { role: "user", content: "Hello, how can you assist me?" },
  
  // Assistant responds to the user's greeting
  { role: "assistant", content: "Hi there! I'm here to help. What do you need assistance with?" },
  
  // User asks a question about services
  { role: "user", content: "I have a question about your services." },
  
  // Assistant encourages the user to ask their question
  { role: "assistant", content: "Sure, go ahead and ask your question. I'll do my best to help!" },

  // User inquires about pricing
  { role: "user", content: "How much do your services cost?" },
  
  // Assistant provides information on pricing
  { role: "assistant", content: "Our pricing varies based on the type of service you're interested in. Could you specify which service you're curious about?" },

  // User specifies interest in web development services
  { role: "user", content: "I'm interested in web development services." },
  
  // Assistant discusses web development service details
  { role: "assistant", content: "Great choice! Our web development services cover a range of technologies and features. Do you have specific requirements in mind?" },

  // User asks about the technology stack used
  { role: "user", content: "What technology stack do you use for web development?" },
  
  // Assistant explains the technology stack
  { role: "assistant", content: "Our web development team commonly uses a stack comprising languages like HTML, CSS, and JavaScript, along with frameworks like React or Angular. The specific stack can vary based on project requirements." },

  // User expresses interest in learning web development
  { role: "user", content: "I'm interested in learning web development. Any recommendations on where to start?" },
  
  // Assistant offers guidance on learning web development
  { role: "assistant", content: "That's fantastic! I recommend starting with the basics of HTML, CSS, and JavaScript. There are many online resources and tutorials available. Once you're comfortable with these, you can explore more advanced topics and frameworks." },

  // User thanks the assistant for the advice
  { role: "user", content: "Thanks for the guidance! I'll get started on that." },
  
  // Assistant encourages the user to reach out if they have more questions
  { role: "assistant", content: "You're welcome! Feel free to reach out if you have any more questions. Happy coding!" },
];

