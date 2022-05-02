import React from "react";
import Box from '@mui/material/Box';
import style from './Education.less';
import { useTranslation } from "react-i18next";

const About  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box className={style.main}>
            <div style={{ fontSize: '40px', fontWeight: 800 }}>Education</div>
        </Box>
    );  
};

export default About;