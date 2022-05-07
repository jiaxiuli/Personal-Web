/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 16:51:05
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/Projects/Projects.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './Projects.less';
// import { useTranslation } from "react-i18next";

const Projects  = () => {
    
    // const { t }  = useTranslation();

    return (
        <Box className={style.main} style={{ maxHeight: 'calc(100vh + 9999px)' }}>
            <div style={{ fontSize: '40px', fontWeight: 800 }}>Projects</div>
        </Box>
    );  
};

export default Projects;