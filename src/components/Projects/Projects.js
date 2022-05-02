import React from "react";
import Box from '@mui/material/Box';
import style from './Projects.less';
import { useTranslation } from "react-i18next";

const Projects  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box className={style.main}>
            <div style={{ fontSize: '40px', fontWeight: 800 }}>Projects</div>
        </Box>
    );  
};

export default Projects;