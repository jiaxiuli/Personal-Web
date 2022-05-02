import React from "react";
import Box from '@mui/material/Box';
import style from './WorkExp.less';
import { useTranslation } from "react-i18next";

const WorkExp  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box className={style.main}>
            <div style={{ fontSize: '40px', fontWeight: 800 }}>Work Experience</div>
        </Box>
    );  
};

export default WorkExp;