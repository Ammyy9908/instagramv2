import React from 'react'
import { Link } from 'react-router-dom'

function SettingPopup({setSetting}) {

    const handlePopup = (e) =>{
        if(e.target.classList.contains('settings')){
            setSetting(false);
        }
    }
    return (
        <div className='settings' onClick={handlePopup}>
            <div className="setting__popup">
                <Link to="/accounts/changePassword" style={{"color":"#262626","textDecoration":"none"}}><div className="settings__option" style={{"borderBottom":"1px solid #dbdbdb","color":"#262626"}}>Change Password</div></Link>
                <div className="settings__option">Nametag</div>
                <div className="settings__option">Notifications</div>
                <div className="settings__option">Login Activity</div>
                <div className="settings__option">Report a problem</div>
                <div className="settings__option">Log out</div>
                <div className="settings__option" onClick={(e)=>setSetting(false)} style={{"cursor":"pointer"}}>Cancel</div>
            </div>
        </div>
    )
}

export default SettingPopup;