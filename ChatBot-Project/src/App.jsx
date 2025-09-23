import { useState } from 'react'

import {ChatMessages} from './Components/ChatMessages.jsx'
import {ChatInput} from './Components/ChatInput.jsx'

import './App.css'
       
       
       
       


function App() {
  console.log("App component rendered");
  const array=useState([
                {
                    message:"Hello", 
                    role:"user",
                    id:"id1"
                },
                {
                    message:"Hello, how can I help you?", 
                    role:"bot",
                    id:"id2"
                },
                {
                    message:"what is the today'date", 
                    role:"user",
                    id:"id3"
                },
                {
                    message:"Today is sep 02,2025", 
                    role:"bot",
                    id:"id4"
                },
                {
                    message:"Thanks for the date", 
                    role:"user",
                    id:'id5'
                }
            ])
  const [chatMessages,setChatMessages]=array;
            
            return(
                <div className="app-container">
                    
                    <ChatMessages
                        chatMessages={chatMessages}
                    /> 
                    <ChatInput 
                        chatMessages={chatMessages}
                        setChatMessages={setChatMessages}  
                    /> 
                </div>
            );
}

export default App
