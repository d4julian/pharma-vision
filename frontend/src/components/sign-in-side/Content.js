import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import HealingRoundedIcon from '@mui/icons-material/HealingRounded';import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';

import FavoriteIcon from '@mui/icons-material/Favorite'; // Example icon

const items = [
  {
    icon: <HealingRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'We prioritze your health',
    description:
      'We will put you and your health first, our goal is to ultimately remove all medicinal error.',
  },
  {
    icon: <AccessAlarmRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Tracking and scheduling medicine made easy',
    description:
      'Use our platform to naviagate what medication you should take, when you should take the medication, and more!',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Next-Level customer support',
    description:
      'Enjoy a high lever of customer support with us at Pharma Vision.',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Powered by cutting edge AI technology',
    description:
      'Take advantage of our AI-powered image detection to track your medication.',
  },
];

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      {/* Replace SitemarkIcon with your own text and icon */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: 1, // Space between icon and text
        }}
      >
        {/* Custom icon */}
        <FavoriteIcon sx={{ fontSize: 40, color: 'primary.main' }} /> 
        {/* Custom text */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          PharmaVision
        </Typography>
      </Box>
      {/* Mapping through items */}
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}