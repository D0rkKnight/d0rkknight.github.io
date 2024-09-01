import React from 'react';
import { Container, Box, Card, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Achievement from './Achievement';

function AchievementsList() {
    const achievements = [
        {
            title: "Received the STAR award for TritonGPT",
            description: "Part-Time Software Engineer at UCSD. Accelerated the development of TritonGPT, a chatbot assisting over 560 leadership members."
        },
        {
            title: "Developed automation suite for TritonGPT",
            description: "Led the development of an automation suite that reduced deployment time by 75%."
        },
        {
            title: "Collaborated on a digital twin model of UCSD",
            description: "Software Developer Intern at Qualcomm Institute. Worked with a team to create a digital twin of the UCSD campus."
        },
        {
            title: "Image Segmentation AI - Academic Project",
            description: "Worked in a team to build a deep network capable of segmenting image data with 70% accuracy. Presented findings in a multi-page report."
        }
    ];

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'flex-start' }}>
                <Box sx={{ flexBasis: { xs: '100%', md: '30%' }, marginRight: { md: 2 }, marginBottom: { xs: 2, md: 0 } }}>
                    <Card>
                        <CardMedia
                            component="img"
                            image="/Hanzen-Shou.jpg" // Replace with the actual image path
                            alt="Your Name"
                            sx={{ borderRadius: '50%', width: '100%', height: 'auto' }}
                        />
                    </Card>
                </Box>
                <Box sx={{ flexBasis: { xs: '100%', md: '70%' } }}>
                    {achievements.map((achievement, index) => (
                        <Achievement
                            key={index}
                            title={achievement.title}
                            description={achievement.description}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default AchievementsList;
