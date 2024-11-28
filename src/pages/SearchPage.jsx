
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useState } from 'react';
import { getData } from '../utils';
import { Button, CircularProgress, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
//import { ContentPagination } from '../components/ContentPagination';
import { Content } from '../components/Content';
import { ContentPagination } from '../components/ContentPagination';
import { Height } from '@mui/icons-material';


export const SearchPage = () => {
  const [searchtext, setsearchtext] = useState('');
  const [query, setQuery] = useState('')
  const [page,setPage]=useState(1)
  const [type, setType] = useState('movie');
  const [fetchData, setFetchData] = useState(false);

  const urlSearch = searchtext
    ? `https://api.themoviedb.org/3/search/${type}?&page=${page}&api_key=${import.meta.env.VITE_KEY}`: `https://api.themoviedb.org/3/${type}/popular?page=${page}&api_key=${import.meta.env.VITE_KEY}`;

  const handleClick=()=>{
      console.log(handleClick);
      setFetchData(true)
      setQuery(searchtext)
    
    
  }

  return (
    <>
    <div className='searchbar'>
      <div className='searchdiv'>
        <div >
          
        <TextField sx={{height:50,width:250,margin:1}} id="filled-basic" label="Search movies/tv series" variant="filled" 
        onChange={(event)=>setsearchtext(event.target.value)} 
        value={searchtext}
        />
        <Button sx={{height:55, width:50, margin:1}} variant="contained" endIcon={<SearchIcon sx={{width:30, height:30, margin:0, padding:0}} />}
        onClick={handleClick}
        >
        </Button>
        </div>
        <div className='searchbuttons'>
        <Button sx={{height:50,width:150,margin:1}} variant="outlined"
          onClick={()=>setType('movie')}      
        
        >Movie</Button>
        <Button sx={{height:50,width:150,margin:1}} variant="outlined"
        onClick={()=>setType('tv')}
        
        >TV Series</Button>
        </div>
      </div>
     {fetchData && 
      <>
      <div>
        <Content url={urlSearch} searchtext={query} type={type}/>
      </div>
      
      </>}
    </div>
    </>
  )
}

