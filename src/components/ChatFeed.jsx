import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'


const ChatFeed = (props) => {

    //-- Remember the props here is the chat app props we get from app.js
    const { chats, activeChat, userName, messages } = props

    const chat = chats && chats[activeChat];

    console.log(chat, userName, messages)

    return (
        <div>
            ChatFeed        
        </div>
    )
}

export default ChatFeed
