import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex' }}>
            {/* Sidebar */}
            <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
                <Toolbar />
                <List>
                    <ListItem button component={Link} href="/posts">
                        <ListItemText primary="Posts" />
                    </ListItem>
                    <ListItem button component={Link} href="/pages">
                        <ListItemText primary="Pages" />
                    </ListItem>
                    <ListItem button component={Link} href="/plugins">
                        <ListItemText primary="Plugins" />
                    </ListItem>
                </List>
            </Drawer>

            {/* Main Content */}
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
