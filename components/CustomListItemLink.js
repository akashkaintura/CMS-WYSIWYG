import React from 'react';
import { ListItem } from '@mui/material';
import Link from 'next/link';

const CustomListItemLink = ({ href, children, ...props }) => {
    return (
        <Link href={href} passHref>
            <ListItem button component="a" {...props}>
                {children}
            </ListItem>
        </Link>
    );
};

export default CustomListItemLink;
