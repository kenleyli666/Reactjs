import * as React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';

const CategoriesFilter = ({ categoryData }) => {
    return (
        <Box
            sx={{
                marginLeft: 1
            }}
        >
            <Link href={categoryData.link}>{ categoryData.name }</Link>
        </Box>
    );
};

export default CategoriesFilter;