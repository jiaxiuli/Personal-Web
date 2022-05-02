import React from 'react';
import Box from '@mui/material/Box';

const TitleContainer = (props) => {
    return (
        <Box sx={{ 
            fontSize: '32px',
            fontWeight: 600,
            fontFamily: "'Cinzel', serif",
            padding: '3% 0px',
            display: 'flex',
            justifyContent: 'center',
            letterSpacing: '1rem',
            color: 'rgba(255, 255, 255, 0.4)',
            "@media screen and (max-width: 800px)": {
                fontSize: '28px',
            }
        }}>
            {`- ${props.title} -`}
        </Box>
    );
};

export default TitleContainer;