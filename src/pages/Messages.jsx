import React from 'react'
import MessagesIcon from '../assets/MessagesIcon'
import NewMessage from '../assets/NewMessage'
import ChatTile from '../components/ChatTile'
import Navbar from '../components/Navbar'
import message from '../message.gif'

function Messages() {
    return (
        <div className="message">
            <Navbar/>
            <div className="message_page_container">
                <div className="message_sidenav">
                    <div className="sidenav__header">
                        <span className="username">
                            Sumitbighaniya
                        </span>
                        <a href="#" className="new_message"><NewMessage/></a>
                    </div>
                    <div className="chats__tiles">
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        <ChatTile/>
                        
                    </div>
                </div>
                <div className="messages__body">
                    {/*Ternary operator if 1 less than 5 return Empty Message 

                    query?True:False
                    
                    */}
                    {1<5?<div className="messageEmpty">
                        <div className="empty__message__centered">
                            <img src={message} alt="logo" width="45px" height="45px"/>
                            <h4>Your Messages</h4>
                            <p>Send private photos and messages to a friend or group.</p>
                            <a href="" className="send_message_btn">Send Message</a>
                        </div>
                    </div>:
                    <div className="message">
                        <h1>Messages Comes here</h1>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Messages
