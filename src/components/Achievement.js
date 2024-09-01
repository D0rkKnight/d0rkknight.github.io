// src/Achievement.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Achievement({ title, description }) {
    return (
        <Card variant="outlined" sx={{ marginBottom: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Achievement;
