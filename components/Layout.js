import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItemText } from '@mui/material';
import CustomListItemLink from './CustomListItemLink';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex' }}>
            <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
                <Toolbar />
                <List>
                    <CustomListItemLink href="/posts">
                        <ListItemText primary="Posts" />
                    </CustomListItemLink>
                    <CustomListItemLink href="/pages">
                        <ListItemText primary="Pages" />
                    </CustomListItemLink>
                    <CustomListItemLink href="/plugins">
                        <ListItemText primary="Plugins" />
                    </CustomListItemLink>
                </List>
            </Drawer>

            <div style={{ flexGrow: 1, padding: '20px' }}>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            CMS Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
