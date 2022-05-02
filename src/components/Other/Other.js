import React from "react";
import Box from '@mui/material/Box';
import style from './Other.less';
import { useTranslation } from "react-i18next";

const Other  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box className={style.main}>
            <div style={{ fontSize: '40px', fontWeight: 800 }}>Other</div>
        </Box>
    );  
};

export default Other;