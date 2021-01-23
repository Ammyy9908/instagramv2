import React from 'react'
import ActivityList from '../assets/ActivityList'
import CloseIcon from '@material-ui/icons/Close';

function Activity({setActivity}) {
    return (
        <div className="activity">
            <button className="activity_close_btn" onClick={()=>setActivity(false)}>
                <CloseIcon/>
            </button>
            <h2>Your Activity</h2>
            <ActivityList/>
            <ActivityList/>
            <ActivityList/>
            <ActivityList/>
        </div>
    )
}

export default Activity
