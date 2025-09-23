import robotpic from '../assets/robot.png'
import userpic from '../assets/user.png'

import './ChatMessage.css'

export function ChatMessage(props){
            // return and html but ecah 
           const message = props.message;
           const role=props.role;  
           return (
               
                    <div className={role=="bot"?"robot-chat":"user-chat"}>
                        {role=="bot" && <img src={robotpic} alt="userimg" className="chat-profile"/> }
                        <div className="chat-message">
                            {message}
                        </div>
                        
                        {role=="user" &&<img src={userpic} alt="userimg" className="chat-profile"/> }
                    </div>
               
            )
       }

