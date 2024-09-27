import * as React from 'react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Color from './Color';

const buttons = [
    <Color key={'red'} backgroundColor={'red'} />, 
    <Color key={'blue'} backgroundColor={'blue'} />, 
    <Color key={'green'} backgroundColor={'green'} />,
];

const ColorFilter = () => {
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
            <ButtonGroup size="large" aria-label="Large button group">
                {buttons}
            </ButtonGroup>
        </Box>
    );
};

export default ColorFilter;
