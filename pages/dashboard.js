import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Posts</Typography>
                <Typography>Manage your posts here.</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Pages</Typography>
                <Typography>Manage your pages here.</Typography>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Plugins</Typography>
                <Typography>Manage your plugins here.</Typography>
            </Paper>
        </Grid>
    </Grid>
);

export default Dashboard;
