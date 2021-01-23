import React,{useState} from 'react'
import Activity from '../components/Activity';
import Navbar from '../components/Navbar'

function Explore() {

    const [activity,setActivity] = useState(false);
    return (
        <div className="explore">
            <Navbar setActivity={setActivity}/>
            {activity && <Activity setActivity={setActivity}/>}
            <h1>This page is under development</h1>
        </div>
    )
}

export default Explore
