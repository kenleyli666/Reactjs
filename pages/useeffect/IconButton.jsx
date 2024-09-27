import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

const Buttons = [
    <IconButton
        key="red"
        sx={{
            backgroundColor: "red",
            width: '40px',
            height: '40px',
        }}
    >
        <Fingerprint />
    </IconButton>,
    // Uncomment and add keys if you use these buttons
    // <Button key="M">M</Button>,
    // <Button key="L">L</Button>,
    // <Button key="XL">XL</Button>,
];

const IconButtonComponent = () => {
    return (
        <Stack direction="row" spacing={1}>
            {Buttons}
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>
        </Stack>
    );
};

export default IconButtonComponent;
