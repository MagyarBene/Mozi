import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { img_300, imgUnavailable } from '../utils';
import { DetailModal } from './DetailModal';

export const SingleContent=({id,poster_path,title,name,release_date,first_air_date,media_type,vote_average,type})=> {
  const [open, setOpen] = React.useState(false);

  return ( 
    <>
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={()=>setOpen(true)} >
        <CardMedia
        className='image-box'
          sx={{height : 300, width:250}}
          image={poster_path ? img_300+poster_path : imgUnavailable}
          title={title||name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title||name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', display:'flex', justifyContent:'space-between' }}>
            <span>{media_type} </span><span>{ release_date||first_air_date}</span>
          </Typography>
          <span style={{position:'absolute', top:0, right:0,color:'white', border:'1px solid white', borderRadius:'50%', padding:'2px', backgroundColor:"black"}}>{vote_average.toFixed(2)}</span>
        </CardContent>

      </CardActionArea>
      
    </Card>
    {open && <DetailModal open={open} setOpen={setOpen} id={id} media_type={media_type||type}/>}
    </>
  );
}