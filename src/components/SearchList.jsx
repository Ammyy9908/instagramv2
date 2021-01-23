import { Avatar } from '@material-ui/core'
import React from 'react'

function SearchList({name,avatar}) {
    return (
        <div className="search-list">
            <Avatar src={avatar}/>
            <span className="serch__item">
               {name}
            </span>
        </div>
    )
}

export default SearchList
