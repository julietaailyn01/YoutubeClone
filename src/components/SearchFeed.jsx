import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos]= useState(null);
  const {searchTerm } = useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);
  
  return (
    <Box>
      <Typography>

      </Typography>
      <Box>
        <Box/>
        {<Videos videos={videos}/>}
      </Box>
    </Box>
  )
}

export default SearchFeed