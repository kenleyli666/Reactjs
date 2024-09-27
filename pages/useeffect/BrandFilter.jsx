import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const data = [
    {
        brandName: 'Giorgio',
        itemCount: 1,
    },
    {
        brandName: 'Lacoste',
        itemCount: 1,
    },
    {
        brandName: 'Prada',
        itemCount: 1,
    },
    {
        brandName: 'Zara',
        itemCount: 2,
    }
];

const BrandFilter = () => {
    return (
        <>
        {
            data.map((item, i) => {
                return <FormControlLabel
                    key={item.brandName}
                    control={
                        <Checkbox inputProps={{
                            'aria-label': item.brandName
                        }} defaultChecked={i === 0 } />
                    }
                    label={`${item.brandName} (${item.itemCount})`}
                />
            })
        }
        </>
    );
};

export default BrandFilter;