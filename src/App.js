// src/App.js

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AchievementsList from './components/AchievementsList';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; // Import the custom theme


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Hanzen Shou
                    </Typography>
                </Toolbar>
            </AppBar>
            <AchievementsList />
        </ThemeProvider>
    );
}

export default App;
