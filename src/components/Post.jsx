import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LikeBtnIcon from '../assets/LikeBtnIcon';
import CommentIcon from '../assets/CommentIcon';
import ShareIcon from '../assets/ShareIcon';
import { Link } from 'react-router-dom';

function Post() {

    const uri = 'https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/140034101_157254365978149_3998781578724526157_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=RIGCZpvRhV0AX9uDDq_&tp=1&oh=8f6b59bf9d98bc38e6d3d52528279392&oe=6035F57D';

    const [comment,setComment]  = React.useState(false);
    return (
        <div className="post">
            <div className="post__header">
                <div className="header__left">
                <Avatar src={uri}/>
                <span className="post_author">
                    Sumit
                </span>
                </div>
                <IconButton><MoreHorizIcon/></IconButton>
            </div>
            <div className="post__image">
                <img src="https://source.unsplash.com/random?portraits/600x700" alt="post__image"/>
            </div>
            <div className="post__footer">
                <div className="post__actions">
                    <a href="#" className="like_btn">
                        <LikeBtnIcon/>
                    </a>
                    <Link to="#" className="comment_btn" onClick={()=>setComment(true)}>
                        <CommentIcon/>
                    </Link>
                    <a href="#" className="share_btn">
                        <ShareIcon/>
                    </a>
                </div>
                <span className="post__likes">
                    10,468K likes
                </span>
                    <a href="#" className="view__all_cmt">
                        View all comments
                    </a>
               
                <div className="post__comments">
                    <p><span className="comment__author">Sahil</span> Wow</p>
                </div>
                <time className="post_timestamp" title="Post Date Comes Here">
                    9 HOURS AGO
                </time>
                
            </div>
            {comment && <div className="post__comment__box">
                    <input type="text" name="comment" id="comment" placeholder="Add a comment"/>
                    <a href="#" className="btn_comment_post">Post</a>
                </div>}
        </div>
    )
}

export default Post
