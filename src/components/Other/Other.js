/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 17:55:27
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/Other/Other.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './Other.less';
// import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import { useTranslation } from "react-i18next";

const Other  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box
            className={style.main}
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
            style={{ height: 'calc(100vh - 72px)' }}
        >
            <TitleContainer title={t('description.other_con')}/>
            <Box flex={1}>
                <Box width='100%' height='75%' boxSizing={'border-box'}>

                </Box>

                <Box
                    sx={{
                        width: '100%',
                        height: '25%',
                        backgroundColor: '#1D2640',
                        borderTop: '2px solid #f0f0f0',
                        boxSizing: 'border-box',
                        boxShadow: ' 0 -8px 20px -5px rgba(0,0,0,0.5)'
                    }}
                >

                </Box>

            </Box>
            {/* <Box width='100%' height='70%' border='1px solid black' boxSizing={'border-box'}>

            </Box>

            <Box width='100%' height='30%' border='1px solid black' boxSizing={'border-box'}>

            </Box> */}
        </Box>
    );  
};

export default Other;