import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  
  color: theme.palette.text.secondary,
}));


function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item sx={{height:'50px',color:'black',boxShadow:"0",}}>
            <h2>EDGECUT
            </h2>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{boxShadow:"0"}}>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <li style={{ listStyle: "none", fontSize:'18px' }}>Home</li>
              <li style={{ listStyle: "none", fontSize:'18px' }}>About</li>
              <li style={{ listStyle: "none", fontSize:'18px' }}>Furitures</li>
              <li style={{ listStyle: "none", fontSize:'18px' }}>Blogs</li>
              <li style={{ listStyle: "none",fontSize:'18px' }}>ContactUs</li>
            </ul>
          </Item>
        </Grid>
        <Grid item xs>
          <Item sx={{display:'flex',height:'50px',boxShadow:"0",}}>
            <h3 sx={{}}>login</h3>
            <PersonRemoveIcon sx={{marginTop:'15px'}} />
            <ZoomInIcon sx={{marginLeft:'50px',marginTop:'15px'}}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Nav