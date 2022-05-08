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
            fontSize: '28px',
            fontWeight: 800,
            fontFamily: "'Fira Code', monospace",
            paddingTop: '3%',
            paddingBottom: '12px',
            display: 'flex',
            color: '#6A6A6A',
            justifyContent: 'center',
            letterSpacing: '0.1rem',
            userSelect: 'none',
            "@media screen and (max-width: 1000px)": {
                fontSize: '24px',
            },
            "@media screen and (max-width: 800px)": {
                fontSize: '18px',
            }
        }}>
            {`/* ${props.title} */`}
        </Box>
    );
};

export default TitleContainer;