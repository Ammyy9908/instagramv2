import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Posts from '../components/Posts'
import Suggesttions from '../components/Suggesttions'
import UserHomeInfo from '../components/UserHomeInfo';
import SearchIcon from '@material-ui/icons/Search';
import Activity from '../components/Activity';
import SearchPanel from '../components/SearchPanel';

function Home() {

    
    const [activity,setActivity] = useState(false);
    const [search,setSearch] = useState(false);

   
    return (
        <div>
            <div className="home">
            {/*Navbar*/}
            <Navbar setActivity={setActivity}/>
            {activity && <Activity setActivity={setActivity}/>}
            {search && <SearchPanel setSearch={setSearch}/>}
            <div className="body__home">
                <div className="body__left">
                <Posts/>
                
                </div>
                <div className="body__right">
                    <UserHomeInfo/>
                    <Suggesttions/>
                </div>
            </div>
            {!search && <a href="#" className="fab_search_btn" onClick={()=>setSearch(true)}>
                <SearchIcon/>
            </a>}
        </div>
        </div>
    )
}

export default Home
