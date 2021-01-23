import React from 'react';
import instaanimated from '../instaanimated.gif'

function NotFound() {
    return (
        <div className="notfound">
            <div className="centered">
            <img src={instaanimated} width="96px" height="96px"/>
            <h1 style={{"fontSize":"35px",'fontFamily':"sans-serif"}}>Oops! Page not found</h1>
            </div>
        </div>
    )
}

export default NotFound
