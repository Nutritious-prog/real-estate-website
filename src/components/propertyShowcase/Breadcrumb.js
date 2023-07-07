import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GiteIcon from '@mui/icons-material/Gite';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function Breadcrumb(props) {
  return (
    <div className='w-full flex'>
            <div className='w-[90%] mx-auto p-5' role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
        <Link to="/"
        >
          <div className='flex items-center hover:underline hover:text-[#C28563]'>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
          </div>
        </Link>
        <Link to="/domy"
        >
          <div className='flex items-center hover:underline hover:text-[#C28563]'>
          <LocalOfferIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Oferta
          </div>
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GiteIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {props.houseName}
        </Typography>
      </Breadcrumbs>
    </div>
    </div>
  )
}

export default Breadcrumb