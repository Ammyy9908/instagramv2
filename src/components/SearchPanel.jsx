import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import SearchList from './SearchList';
import CloseIcon from '@material-ui/icons/Close';

function SearchPanel({setSearch}) {
    const [key,setKey] = React.useState('');
    const [filtered,setFilter] = React.useState([]);

    const data = [
        {
        "name":"Abhishek",
        "avatar":"https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
        },
        {
            "name":"Sahil",
            "avatar":"https://randomuser.me/api/portraits/men/35.jpg"
        },
        {
            "name":"Sumit",
            "avatar":"https://uifaces.co/our-content/donated/N5PLzyan.jpg"
         },
         {
            "name":"Rahul",
            "avatar":"https://randomuser.me/api/portraits/men/95.jpg"
         },
         {
            "name":"Himani",
            "avatar":"https://randomuser.me/api/portraits/women/47.jpg"
         }
];


const handleSearch =(e)=>{
    if(e.target.value.length<=0){
        setFilter([]);
    }
    console.log(e.target.value);
    const filtered = data.filter((item)=>item.name.includes(e.target.value));
    setFilter(filtered)
}
    return (
        <div className="search__panel">
            <div className="serahch__panel__wrapper">
                <a href="#" className="search__panel__close_btn" 
                onClick={()=>setSearch(false)}><CloseIcon/></a>
            <div className="search__panel_search_bar">
                    <SearchIcon/> <input type="search" name="key" id="key" placeholder="Search" value={key} onChange={(e)=>setKey(e.target.value)} onInput={handleSearch} autoComplete="off"/>
            </div>
            <div className="searched__list">
                {
                    filtered.map((item)=>{
                        return <SearchList name={item.name} avatar={item.avatar}/>
                    })
                }
                
                
            </div>
            </div>
        </div>
    )
}

export default SearchPanel
