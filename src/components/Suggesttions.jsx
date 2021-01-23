import React from 'react'
import Suggestion from './Suggestion'

function Suggesttions() {
    return (
        <div className="suggestions">
            <div className="suggesstion__header">
                <span className="sgst__head">Suggestions For You</span>
                <a href="#" className="view_all_sgst">See All</a>
                
            </div>
            <div className="all_suggestions">
                    <Suggestion/>
                    <Suggestion/>
                    <Suggestion/>
                </div>
        </div>
    )
}

export default Suggesttions
