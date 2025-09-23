import {useState} from 'react'
import {Chatbot} from  'supersimpledev'

import './ChatInput.css'

export function ChatInput({setChatMessages,chatMessages}){
           
            const [inputText,setInputText]=useState('');
            
            function saveInputText(event){
                //console.log(event.target.value)
                setInputText(event.target.value)
            }

            function sendMessage(){
                
                const newChatMessages=[...chatMessages,
                    {
                        message:inputText,
                        role:'user',
                        key:crypto.randomUUID()
                    }
                ]
                //update the state
                setChatMessages(newChatMessages);
                // store the response of bot
                const response=Chatbot.getResponse(inputText);
                
                setChatMessages([...newChatMessages,
                    {
                        message:response,
                        role:'bot',
                        key:crypto.randomUUID()
                    }
                ])
                
                //set the input text to empty
                setInputText('')
            }
            // return an html 
           
            return (
               <div className="chat-input-container">
                   <input 
                    placeholder="Type your message here..." 
                    size="30"
                    onChange={saveInputText}
                    value={inputText}
                    className="chat-input"
                    />
                   <button className="send-button" onClick={sendMessage}>send</button>
               </div>
           )
       }