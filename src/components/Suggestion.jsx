import { Avatar } from '@material-ui/core'
import React from 'react'

function Suggestion() {
    return (
        <div className="suggestion">
            <Avatar/>

            <span className="suggestion_name">Person Name</span>

            <a href="#" className="follow_btn">Follow</a>

        </div>
    )
}

export default Suggestion
