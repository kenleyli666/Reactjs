import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button key="S">S</Button>,
    <Button key="M">M</Button>,
    <Button key="L">L</Button>,
    <Button key="XL">XL</Button>,
  ];
  

const SizeFilter = () =>{
    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 1,
            },
          }}
        >
          <ButtonGroup size="small" aria-label="Small button group">
            {buttons}
          </ButtonGroup>
          <ButtonGroup color="secondary" aria-label="Medium-sized button group">
            {buttons}
          </ButtonGroup>
          <ButtonGroup size="large" aria-label="Large button group">
            {buttons}
          </ButtonGroup>
        </Box>
      );
    };


export default SizeFilter;