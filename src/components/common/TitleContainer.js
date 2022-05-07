/*
 * @Author: 李佳修
 * @Date: 2022-05-02 23:21:17
 * @LastEditTime: 2022-05-07 09:58:30
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/common/TitleContainer.js
 */
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
            "@media screen and (max-width: 800px)": {
                fontSize: '28px',
            }
        }}>
            {`- ${props.title} -`}
        </Box>
    );
};

export default TitleContainer;