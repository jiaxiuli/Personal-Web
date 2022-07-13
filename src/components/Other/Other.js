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
import CopyrightIcon from '@mui/icons-material/Copyright';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import TitleContainer from "../common/TitleContainer";
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Box width='100%' flex={1} boxSizing={'border-box'}>

                </Box>

                {/* 屏幕宽度大于700 */}
                <Box
                    sx={{
                        width: '100%',
                        height: '80px',
                        paddingY: 2,
                        paddingX: 4,
                        backgroundColor: '#1D2640',
                        borderTop: '2px solid #f0f0f0',
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        userSelect: 'none',
                        color: '#fff',
                        fontFamily: "'Libre Baskerville', serif",
                        boxShadow: ' 0 -8px 20px -5px rgba(0,0,0,0.5)',
                        "@media screen and (max-width: 700px)": {
                            display: 'none'
                        },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            "@media screen and (max-width: 1000px)": {
                                fontSize: '14px',
                            },
                        }}
                    >
                        
                        <Box
                            sx={{
                                width: '25px',
                                mr: 2,
                                "@media screen and (max-width: 1000px)": {
                                    width: '20px',
                                },
                            }}>
                            <img width='100%' src='./logo_leo.png' alt='logo'/>
                        </Box>
                        {t('description.name')}
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: '14px',
                            "@media screen and (max-width: 1000px)": {
                                fontSize: '12px',
                            },
                        }}
                    >
                        <CopyrightIcon sx={{
                            fontSize: '20px',
                            mr: 0.8,
                            "@media screen and (max-width: 1000px)": {
                                fontSize: '16px',
                            },
                        }}/>
                        Jiaxiu Li, 2022. All rights reserved. 
                    </Box>


                    <Box display='flex' alignItems='center'>
                        <Box sx={{
                            fontSize: '14px',
                            mr: 2,
                            "@media screen and (max-width: 1000px)": {
                                fontSize: '12px',
                            },
                        }}>
                            {t('description.welcomeToVisit')}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Box sx={{
                                width: '18px',
                                height: '18px',
                                p: 0.8,
                                background: '#e0e0e0',
                                borderRadius: '9px',
                                mr: 1,
                                cursor: 'pointer',
                            }}
                            onClick={() => window.open('https://github.com/jiaxiuli')}
                            >
                                <img src='./contact_icon/github.svg' alt='github'/>
                            </Box>

                            <Box sx={{ 
                                width: '18px',
                                height: '18px',
                                p: 0.8,
                                background: '#e0e0e0',
                                borderRadius: '9px',
                                cursor: 'pointer'
                            }}
                            onClick={() => window.open('https://www.linkedin.com/in/jiaxiu-li-80aab9192/')}
                            >
                                <img src='./contact_icon/linkedin.svg' alt='linkedin'/>
                            </Box>
                        </Box>
                    </Box>
                  


                </Box>



                {/* 屏幕宽度小于700 */}
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        paddingY: 2,
                        paddingX: 4,
                        backgroundColor: '#1D2640',
                        borderTop: '2px solid #f0f0f0',
                        boxSizing: 'border-box',
                        display: 'none',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        userSelect: 'none',
                        color: '#fff',
                        fontFamily: "'Libre Baskerville', serif",
                        boxShadow: ' 0 -8px 20px -5px rgba(0,0,0,0.5)',
                        "@media screen and (max-width: 700px)": {
                            display: 'flex',
                            flexDirection: 'column'
                        },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            "@media screen and (max-width: 1000px)": {
                                fontSize: '14px',
                            },
                        }}
                    >
                        
                        <Box
                            sx={{
                                width: '40px',
                                mr: 2,
                                "@media screen and (max-width: 1000px)": {
                                    width: '16px',
                                    mr: 1,
                                },
                            }}>
                            <img width='100%' src='./logo_leo.png' alt='logo'/>
                        </Box>
                        {t('description.name')}
                    </Box>


                    <Box mt={1}>
                        <Box sx={{
                            fontSize: '14px',
                            "@media screen and (max-width: 1000px)": {
                                fontSize: '12px',
                            },
                        }}>
                            {t('description.welcomeToVisit')}
                        </Box>
                        <Box
                            sx={{
                                mt: 1,
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Box sx={{
                                width: '18px',
                                height: '18px',
                                p: 0.8,
                                background: '#e0e0e0',
                                borderRadius: '9px',
                                mr: 1,
                                cursor: 'pointer',
                            }}
                            onClick={() => window.open('https://github.com/jiaxiuli')}
                            >
                                <img src='./contact_icon/github.svg' alt='github'/>
                            </Box>

                            <Box sx={{ 
                                width: '18px',
                                height: '18px',
                                p: 0.8,
                                background: '#e0e0e0',
                                borderRadius: '9px',
                                cursor: 'pointer'
                            }}
                            onClick={() => window.open('https://www.linkedin.com/in/jiaxiu-li-80aab9192/')}
                            >
                                <img src='./contact_icon/linkedin.svg' alt='linkedin'/>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: '14px',
                            "@media screen and (max-width: 1000px)": {
                                fontSize: '12px',
                            },
                        }}
                    >
                        <CopyrightIcon sx={{
                            fontSize: '20px',
                            mr: 0.8,
                            "@media screen and (max-width: 1000px)": {
                                fontSize: '16px',
                            },
                        }}/>
                        Jiaxiu Li, 2022. All rights reserved. 
                    </Box>
                </Box>
            </Box>
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