import React from 'react'

function Auth({login}) {
    return (
        <div className="auth">
            <h1>User {login?"login":"Register"}</h1>
        </div>
    )
}

export default Auth
