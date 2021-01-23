import { Avatar } from '@material-ui/core'
import React from 'react'

function ActivityList() {
    return (
        <div className="activity-list">
            <Avatar/> 
            <p className="activity_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </p>
            <a className="activity_following" href="#">Following</a>
        </div>
    )
}

export default ActivityList
