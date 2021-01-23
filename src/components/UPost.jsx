import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

function UPost() {
    return (
        <div className="upost">
            <div className="post__inner">
                <div className="post__inner__centered">
                    <span className="post__likes__count">
                        <FavoriteIcon/> 0
                    </span>
                    <span className="post__comments__count">
                        <ChatBubbleIcon/> 0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default UPost
