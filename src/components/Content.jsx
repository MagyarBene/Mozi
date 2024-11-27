import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getData } from '../utils'
import { CircularProgress } from '@mui/material'
import { SingleContent } from './SingleContent'
import { useState } from 'react'
import { ContentPagination } from './ContentPagination'

export const Content = ({url,type,searchtext}) => {
    const [page,setPage]=useState(1)
    const urlSearch = url+'&query='+searchtext
    console.log(urlSearch);
    
    const {isLoading,isError,error,data}=useQuery({queryKey:['trendings',searchtext? urlSearch : url+"&page="+page],queryFn:getData})

    if (isLoading)  return <CircularProgress color="secondary" />
    if (isError) return <div>Error fetching data :{error.message}</div>
      console.log(data, data.total_pages

      );
      
    
  return (
    <div className='container'>
      {data.results.map(obj=>
        <SingleContent key={obj.id} {...obj} type={type}/>
      )}
      <ContentPagination page={page} setPage={setPage} numberOfPage={data.total_pages}/>
    </div>
  )
}


