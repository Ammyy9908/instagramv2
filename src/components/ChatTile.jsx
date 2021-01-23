import { Avatar } from '@material-ui/core'
import React from 'react'

function ChatTile() {
    return (
        <div className="chat-tile">
            <Avatar/>
            <div className="chat__info">
                <span className="chat__person">
                    Friend Name
                </span>
                <span className="chat__timestamp">
                    23 mins Ago
                </span>
            </div>
        </div>
    )
}

export default ChatTile
