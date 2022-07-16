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
import FlexBox from "../common/FlexBox";
// import CopyrightIcon from '@mui/icons-material/Copyright';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import TitleContainer from "../common/TitleContainer";
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import ContactInfo from "../common/ContactInfo";

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
            <FlexBox
                sx={{
                        display: 'none',
                        "@media screen and (max-width: 900px)": {
                            display: 'flex'
                        },
                    }}
                >
                    <ContactInfo
                    open={true}
                    style={{
                        position: 'relative',
                        top: '0px',
                        right: 0,
                        width: '250px !important',
                        height: '40px',
                        paddingX: 0,
                        mt: 2,
                        borderRadius: '20px'
                    }}
                />
            </FlexBox>
            <Footer />
        </Box>
    );  
};

export default Other;



// <Box
// sx={{
//     width: '30%',
//     fontSize: '12px',
//     letterSpacing: '1px',
//     userSelect: 'text',
//     display: 'flex',
//     justifyContent: 'center'
// }}
// >
// <Box mr={4}>
//     <img src='./photos/QRCode.jpg' width='120px' alt='wechat'/>
// </Box>
// <Box>
//     <Box display='flex' alignItems='center'>
//         <LocationOnIcon sx={{ mr: 2, fontSize: '18px' }}/>
//         {t('description.torontoCanada')}
//     </Box>
//     <Box display='flex' alignItems='center' mt={1}>
//         <EmailIcon sx={{ mr: 2, fontSize: '18px' }}/>
//         Jiaxiu_li@126.com
//     </Box>
//     <Box display='flex' alignItems='center' mt={1}>
//         <EmailIcon sx={{ mr: 2, fontSize: '18px' }}/>
//         lijiaxiu1020@gmail
//     </Box>

//     <Box display='flex' alignItems='center' mt={1}>
//         <LocalPhoneIcon sx={{ mr: 2, fontSize: '18px' }}/>
//         +86 181-7330-5469
//     </Box>

//     <Box display='flex' alignItems='center' mt={1}>
//         <img
//             width='18px'
//             height='18px'
//             src='./contact_icon/wechat_white.svg'
//             alt='wechat'
//             style={{
//                 marginRight: '16px'
//             }}
//         />
//         LJX1023704808
//     </Box>
// </Box>


// {/* <Box display='flex' alignItems='center' mt={0.5}>
//     <EmailIcon sx={{ mr: 2, fontSize: '18px' }}/>
//     lijiaxiu1020@gmail
// </Box> */}
// </Box>