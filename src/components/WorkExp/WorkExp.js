/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 16:50:11
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/WorkExp/WorkExp.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './WorkExp.less';
// import { useTranslation } from "react-i18next";

const WorkExp  = () => {
    
    // const { t }  = useTranslation();

    return (
        <Box className={style.main} style={{ maxHeight: 'calc(100vh + 9999px)' }}>
            <div style={{ fontSize: '40px', fontWeight: 800 }}>Work Experience</div>
        </Box>
    );  
};

export default WorkExp;