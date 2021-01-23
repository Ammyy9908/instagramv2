import React,{useState} from 'react'
import SettingIcon from '../assets/SettingIcon';
import Navbar from '../components/Navbar'
import SettingPopup from '../components/SettingPopup';
import UPost from '../components/UPost';

function Profile({uname}) {

    const [isSetting,setSetting] = useState(false);

    const uri = 'https://scontent-maa2-1.cdninstagram.com/v/t51.2885-19/s150x150/140034101_157254365978149_3998781578724526157_n.jpg?_nc_ht=scontent-maa2-1.cdninstagram.com&_nc_ohc=RIGCZpvRhV0AX9uDDq_&tp=1&oh=8f6b59bf9d98bc38e6d3d52528279392&oe=6035F57D';
    return (
        <div className="profile">
            <Navbar/>
           { isSetting && <SettingPopup setSetting={setSetting}/>}
            <div className="profile__container">
                <div className="profile__top">
                    <img src={uri} alt="u_avatar"/>
                    <div className="user__meta_data">
                        <div className="udata1">
                            <span className="u_display_name">{uname}</span>
                            <a href="#" className="edit_profile_btn">Edit Profile</a>
                            <a href="#" className="setting_btn" onClick={()=>setSetting(true)}><SettingIcon/></a>
                        </div>
                        <div className="udata2">
                           <span className="u_posts">0 post</span>
                           <span className="u_followers">0 followers</span>
                           <span className="u_followings">0 followings</span>
                        </div>
                        <div className="udata3">
                            <h2 className="uname__profile">Sumit Kumar</h2>
                        </div>
                    </div>
                </div>

                <div className="user__posts">
                    <div className="user__tabs">
                        <a href="#" className="u___posts active_tab">POSTS</a>
                        <a href="#" className="u___posts">SAVED</a>
                        <a href="#" className="u___posts">TAGGED</a>
                    </div>
                    <div className="user_posts__grid">
                        <UPost/>
                        <UPost/>
                        <UPost/>
                        <UPost/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
