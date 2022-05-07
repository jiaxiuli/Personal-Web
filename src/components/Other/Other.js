/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 16:51:09
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/Other/Other.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './Other.less';
// import { useTranslation } from "react-i18next";

const Other  = () => {
    
    // const { t }  = useTranslation();

    return (
        <Box className={style.main} style={{ maxHeight: 'calc(100vh + 9999px)' }}>
            <div style={{ fontSize: '40px', fontWeight: 800 }}>Other</div>
        </Box>
    );  
};

export default Other;