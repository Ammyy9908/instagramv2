import { Avatar } from '@material-ui/core'
import React from 'react';
import {Link} from 'react-router-dom';

function UserHomeInfo() {

    const uri = 'https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/140034101_157254365978149_3998781578724526157_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=RIGCZpvRhV0AX9uDDq_&tp=1&oh=8f6b59bf9d98bc38e6d3d52528279392&oe=6035F57D';
    return (
        <div className="user_home_info">
            <Avatar src={uri}/>
            <div className="u_info_home_textual">
                <Link to="/profile/sumit" className="person_name" style={{"textDecoration":"none"}}><span className="person_name">Sumit Kumar</span></Link>
                <span className="display_name">Sumitbighaniya</span>
            </div>
            <Link className="logout" to="/logout">Logout</Link>
        </div>
    )
}

export default UserHomeInfo
