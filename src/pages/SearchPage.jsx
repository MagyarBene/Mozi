
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useState } from 'react';
import { getData } from '../utils';
import { Button, CircularProgress, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
//import { ContentPagination } from '../components/ContentPagination';
import { Content } from '../components/Content';
import { ContentPagination } from '../components/ContentPagination';


export const SearchPage = () => {
  const [searchtext, setsearchtext] = useState('');
  const [page,setPage]=useState(1)
  const [type, setType] = useState('movie');
  const [fetchData, setFetchData] = useState(false);

  const urlSearch = searchtext
    ? `https://api.themoviedb.org/3/search/${type}?&page=${page}&api_key=${import.meta.env.VITE_KEY}`: `https://api.themoviedb.org/3/${type}/popular?page=${page}&api_key=${import.meta.env.VITE_KEY}`;

  const handleClick=()=>{
      console.log(handleClick);
      setFetchData(true)
    
    
  }

  return (

    <div style={{ padding: "20px", margin: "0 auto", color: 'white' }}>

      <TextField id="filled-basic" label="Search" variant="filled" 
      onChange={(event)=>setsearchtext(event.target.value)} 
      value={searchtext}
      />

      <Button variant="contained" endIcon={<SearchIcon />}
      onClick={handleClick}
      >
      
      </Button>
      <div>
      <Button variant="outlined"
        onClick={()=>setType('movie')}      
      
      >Movie</Button>
      <Button variant="outlined"
      onClick={()=>setType('tv')}
      
      >TV Series</Button>
      </div>
     {fetchData && 
      <>
      <div>
        <Content url={urlSearch} searchtext={searchtext} type={type}/>
      </div>
      <ContentPagination page={page} setPage={setPage} numberOfPage={10}/>
      </>}
    </div>
  )
}

