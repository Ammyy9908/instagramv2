import React from 'react';
import Logo from '../logo.png';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '../assets/HomeIcon';
import MessagesIcon from '../assets/MessagesIcon';
import ExploreIcon from '../assets/ExploreIcon';
import LikeIcon from '../assets/LikeIcon';
import {Link} from 'react-router-dom'


const uri = 'https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/140034101_157254365978149_3998781578724526157_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=RIGCZpvRhV0AX9uDDq_&tp=1&oh=8f6b59bf9d98bc38e6d3d52528279392&oe=6035F57D';




function Navbar({setActivity}) {

    const handleActivity = (e) =>{
        setActivity(true);
    }
    return (
        <div className="navbar">
            <div className="navbar__container">
                <Link to="/" style={{"display":"block"}}><img src={Logo} alt="brand-logo"/></Link>
                <nav>
                    <Link to="/" style={{"display":"block"}}><HomeIcon/></Link>
                    <Link to="/direct/inbox"><MessagesIcon/></Link>
                    <Link to="/explore"><ExploreIcon/></Link>
                    <Link to="/" onClick={handleActivity}><div><LikeIcon/></div></Link>
                    <Link to="/profile/sumit" clLinkssName="avatar"><img src={uri} alt="u_avatar"/></Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
