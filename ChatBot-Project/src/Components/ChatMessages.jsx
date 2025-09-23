import {useRef,useEffect} from 'react'
import {ChatMessage} from './ChatMessage.jsx'

import './ChatMessages.css'

export function ChatMessages({chatMessages}){
            //const ChatMessages=array[0];
            //const setChatMessages=array[1];    
            const chatMessageRef=useRef(null);
            useEffect(() =>{
                console.log("df");
                const containerEle=chatMessageRef.current;
                if(containerEle){
                    containerEle.scrollTop=containerEle.scrollHeight;
                }
            },[chatMessages])
            
            return( 
                    <div className="chat-container" ref={chatMessageRef}>
                    
                        {chatMessages.map((chatMessage)=>{
                            return ( 
                                <ChatMessage 
                                    message={chatMessage.message}
                                    role={chatMessage.role}
                                    key={chatMessage.id}
                                />
                            )
                            })
                        }
                    </div>
                )

        }


// same as export on the top of the function
//  used to export one function on ur file
// export default ChatMessages;