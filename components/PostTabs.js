import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box } from '@mui/material';

const PostTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box>
            <Tabs value={activeTab} onChange={handleChange}>
                <Tab label="All Posts" />
                <Tab label="Drafts" />
                <Tab label="Published" />
            </Tabs>
            <Box sx={{ p: 2 }}>
                {activeTab === 0 && <Typography>All Posts Content</Typography>}
                {activeTab === 1 && <Typography>Drafts Content</Typography>}
                {activeTab === 2 && <Typography>Published Content</Typography>}
            </Box>
        </Box>
    );
};

export default PostTabs;
