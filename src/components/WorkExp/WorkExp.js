/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 17:54:26
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/WorkExp/WorkExp.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './WorkExp.less';
import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import FlexBox from "../common/FlexBox";
import StyledCard from "../common/StyledCard";
import ImageList from "../common/ImageList";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CompanyName from "../common/CompanyName";

const WorkExp  = () => {
    const lang = useSelector(state => state.general.language);
    const { t }  = useTranslation();

    return (
        <Box
            className={style.main}
            style={{ 
                minHeight: 'calc(100vh - 72px)' 
            }}
        >
            <TitleContainer title={t('description.work')}/>
            {/* 屏幕宽度大于1500显示 */}
            <FlexBox
                sx={{
                    display: 'flex',
                    "@media screen and (max-width: 1500px)": {
                        display: 'none'
                    },
                }}
            >
                <Box className={style['text-container']}>
                    {/* 理想汽车 */}
                    <Box
                        data-aos="fade-up"
                        sx={{
                            display: 'flex',
                            width: '90%',
                            margin: '4px 0px',
                            "@media screen and (max-width: 800px)": {
                                width: '100%',
                            },
                        }}
                    >
                      
                        <StyledCard
                            sx={{ flex: 3, p: 3, m: 0 }}
                        >
                            <Box display='flex' justifyContent='space-between'>
                                <CompanyName
                                    name={t('description.company_name_li_auto')}
                                    startTime='2021.11'
                                    endTime='2022.06'
                                    location={t('description.liAutoLoc')}
                                    position={t('description.frontendEng')}
                                />
                                  <StyledCard
                                        sx={{
                                            width: '40%',
                                            // flex: 1,
                                            pb: 0,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            boxSizing: 'content-box',
                                        }}
                                    >
                                        <img
                                            width={ lang.currentLanguage === 'en_us' ? '120px' : '96px'}
                                            height='24px'
                                            src={
                                                lang.currentLanguage === 'en_us' ?
                                                './photos/li_auto_logo.png' :
                                                './photos/li-logo-ch.jpg'
                                            }
                                            alt="li-auto-logo"
                                        />
                                        <Box display='flex'>
                                        <LazyLoadImage
                                            effect="opacity"
                                            alt="li-auto-logo"
                                            src="./photos/li-auto.jpg" // use normal <img> attributes as props
                                            style={{
                                                width: '90px',
                                                height: '120px',
                                                borderRadius: '12px',
                                                marginTop: '8px',
                                                marginBottom: '8px'
                                            }}
                                        />
                                        <Box
                                            sx={{userSelect: 'none', paddingX: 3, paddingY: 1}}
                                        >
                                            {t('description.li_auto_intro')}
                                        </Box>
                                    </Box>
                                
                                </StyledCard>
                            </Box>
                            <StyledTextContainer sx={{ mt: 2 }}>
                                {t('description.li_auto_work_content')}
                                {
                                    [
                                        t('description.li_auto_work_content_item1'),
                                        t('description.li_auto_work_content_item2'),
                                        t('description.li_auto_work_content_item3') 
                                    ].map(item => (
                                        <Box display='flex' alignItems='center' m={2}>
                                            <Box 
                                                sx={{
                                                    minWidth: '8px',
                                                    minHeight: '8px',
                                                    maxWidth: '8px',
                                                    maxHeight: '8px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#1A1380',
                                                    marginRight: 4
                                                }}>
                                            </Box>
                                            {item}
                                        </Box>
                                    ))
                                }
                            </StyledTextContainer>
                        </StyledCard>
                        <StyledCard
                            sx={{
                                p: 0,
                                flex: 1,
                                mr: 0,
                                overflow: 'hidden'
                            }}
                        >
                             <ImageList direction='vertical' work='liAuto'/>
                        </StyledCard>
                    </Box>






                    {/* 猿辅导 */}
                    <Box
                        data-aos="fade-up"
                        sx={{
                            display: 'flex',
                            width: '90%',
                            margin: '4px 0px',
                            mt: '8px',
                            "@media screen and (max-width: 800px)": {
                                width: '100%',
                            },
                        }}
                    >
                         <StyledCard
                            sx={{
                                p: 0,
                                flex: 1,
                                ml: 0,
                                overflow: 'hidden'
                            }}
                        >
                             <ImageList direction='vertical' work='yuanFuDao'/>
                        </StyledCard>
                      
                        <StyledCard
                            sx={{ flex: 3, p: 3, m: 0 }}
                        >
                            <Box display='flex' justifyContent='space-between'>
                                <CompanyName
                                    name={t('description.company_name_yuanfudao')}
                                    startTime='2021.06'
                                    endTime='2021.10'
                                    location={t('description.liAutoLoc')}
                                    position={t('description.frontendEng')}
                                />
                                  <StyledCard
                                        sx={{
                                            width: '32%',
                                            // flex: 1,
                                            pb: 0,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            boxSizing: 'content-box',
                                        }}
                                    >
                                        <img
                                            width='145px'
                                            height='40px'
                                            src={'./photos/yuanfudao-logo.jpg'}
                                            alt="li-auto-logo"
                                        />
                                        <Box display='flex'>
                                        <Box
                                            sx={{userSelect: 'none', paddingX: 2}}
                                        >
                                            {t('description.yuanfudao_intro')}
                                        </Box>
                                    </Box>
                                
                                </StyledCard>
                            </Box>
                            <StyledTextContainer sx={{ mt: 2 }}>
                                {t('description.li_auto_work_content')}
                                {
                                    [
                                        t('description.li_auto_work_content_item1'),
                                        t('description.li_auto_work_content_item2'),
                                        t('description.li_auto_work_content_item3') 
                                    ].map(item => (
                                        <Box display='flex' alignItems='center' m={2}>
                                            <Box 
                                                sx={{
                                                    minWidth: '8px',
                                                    minHeight: '8px',
                                                    maxWidth: '8px',
                                                    maxHeight: '8px',
                                                    borderRadius: '50%',
                                                    backgroundColor: '#1A1380',
                                                    marginRight: 4
                                                }}>
                                            </Box>
                                            {item}
                                        </Box>
                                    ))
                                }
                            </StyledTextContainer>
                        </StyledCard>
                    </Box>
                </Box>
            </FlexBox>

            {/* 屏幕宽度小于1500显示 */}
            <FlexBox
                 sx={{
                    display: 'none',
                    "@media screen and (max-width: 1500px)": {
                        display: 'flex'
                    },
                }}
            >
                <Box className={style['text-container']}>
                    {/* 理想汽车 */}
                    <Box
                        data-aos="fade-up"
                        sx={{
                            display: 'flex',
                            width: '100%',
                            margin: '4px 0px',
                            "@media screen and (max-width: 800px)": {
                                width: '100%'
                            },
                        }}
                    >
                        <StyledCard
                            sx={{ flex: 2, p: 1, m: 0 }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    "@media screen and (max-width: 650px)": {
                                        flexDirection: 'column',
                                    },
                                }}
                            >
                                <StyledCard
                                    sx={{
                                        width: '120px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        p: 2,
                                        mr: 0,
                                        boxSizing: 'content-box',
                                        "@media screen and (max-width: 650px)": {
                                            width: '100%',
                                            boxSizing: 'border-box',
                                        },
                                    }}
                                >
                                    <img
                                        width={ lang.currentLanguage === 'en_us' ? '120px' : '96px'}
                                        height='24px'
                                        src={
                                            lang.currentLanguage === 'en_us' ?
                                            './photos/li_auto_logo.png' :
                                            './photos/li-logo-ch.jpg'
                                        }
                                        alt="li-auto-logo"
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            "@media screen and (max-width: 650px)": {
                                               flexDirection: 'row'
                                            },
                                        }}
                                    >
                                        <LazyLoadImage
                                            effect="opacity"
                                            alt="li-auto-logo"
                                            src="./photos/li-auto.jpg" // use normal <img> attributes as props
                                            style={{
                                                width: '120px',
                                                height: '140px',
                                                borderRadius: '12px',
                                                marginTop: '8px',
                                                objectFit: 'cover',
                                                marginBottom: '8px'
                                            }}
                                        />
                                        <Box sx={{ 
                                            fontSize: '14px',
                                            userSelect: 'none',
                                            "@media screen and (max-width: 1000px)": {
                                                fontSize: '12px'
                                            },
                                            "@media screen and (max-width: 650px)": {
                                                p: 3
                                             },
                                        }}>
                                            {t('description.li_auto_intro')}
                                        </Box>
                                    </Box>
                                </StyledCard>
                                <Box flex={1} p={2}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            "@media screen and (max-width: 650px)": {
                                                flexDirection: 'column'
                                            },
                                        }}
                                    >
                                        <Box flex={2}>
                                            <CompanyName
                                                name={t('description.company_name_li_auto')}
                                                startTime='2021.11'
                                                endTime='2022.06'
                                                location={t('description.liAutoLoc')}
                                                position={t('description.frontendEng')}
                                            />
                                        </Box>
                                        <StyledCard
                                            sx={{
                                                p: 0,
                                                flex: 3,
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <ImageList direction='horizontal' work='liAuto'/>
                                        </StyledCard>
                                    </Box>
                                    <StyledTextContainer sx={{ mt: 2 }}>
                                        {t('description.li_auto_work_content')}
                                        {
                                            [
                                                t('description.li_auto_work_content_item1'),
                                                t('description.li_auto_work_content_item2'),
                                                t('description.li_auto_work_content_item3') 
                                            ].map(item => (
                                                <Box display='flex' alignItems='center' m={2}>
                                                    <Box 
                                                        sx={{
                                                            minWidth: '8px',
                                                            minHeight: '8px',
                                                            maxWidth: '8px',
                                                            maxHeight: '8px',
                                                            borderRadius: '50%',
                                                            backgroundColor: '#1A1380',
                                                            marginRight: 4
                                                        }}>
                                                    </Box>
                                                    {item}
                                                </Box>
                                            ))
                                        }
                                    </StyledTextContainer>
                                </Box>
                            </Box>
                        </StyledCard>
                    </Box>

                    {/* 猿辅导 */}
                    <Box
                        data-aos="fade-up"
                        sx={{
                            display: 'flex',
                            width: '100%',
                            margin: '4px 0px',
                            "@media screen and (max-width: 800px)": {
                                width: '100%'
                            },
                        }}
                    >
                        <StyledCard
                            sx={{ flex: 2, p: 1, m: 0 }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    "@media screen and (max-width: 650px)": {
                                        flexDirection: 'column-reverse',
                                    },
                                }}
                            >
                                <Box flex={1} p={2}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            "@media screen and (max-width: 650px)": {
                                                flexDirection: 'column'
                                            },
                                        }}
                                    >
                                        <Box flex={2}>
                                            <CompanyName
                                                name={t('description.company_name_yuanfudao')}
                                                startTime='2021.06'
                                                endTime='2021.10'
                                                location={t('description.liAutoLoc')}
                                                position={t('description.frontendEng')}
                                            />
                                        </Box>
                                        <StyledCard
                                            sx={{
                                                p: 0,
                                                flex: 3,
                                                overflow: 'hidden'
                                            }}
                                        >
                                            <ImageList direction='horizontal' work='yuanFuDao'/>
                                        </StyledCard>
                                    </Box>
                                    <StyledTextContainer sx={{ mt: 2 }}>
                                        {t('description.li_auto_work_content')}
                                        {
                                            [
                                                t('description.li_auto_work_content_item1'),
                                                t('description.li_auto_work_content_item2'),
                                                t('description.li_auto_work_content_item3') 
                                            ].map(item => (
                                                <Box display='flex' alignItems='center' m={2}>
                                                    <Box 
                                                        sx={{
                                                            minWidth: '8px',
                                                            minHeight: '8px',
                                                            maxWidth: '8px',
                                                            maxHeight: '8px',
                                                            borderRadius: '50%',
                                                            backgroundColor: '#1A1380',
                                                            marginRight: 4
                                                        }}>
                                                    </Box>
                                                    {item}
                                                </Box>
                                            ))
                                        }
                                    </StyledTextContainer>
                                </Box>
                                <StyledCard
                                    sx={{
                                        width: '120px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        p: 2,
                                        mr: 0,
                                        boxSizing: 'content-box',
                                        "@media screen and (max-width: 650px)": {
                                            width: '100%',
                                            boxSizing: 'border-box',
                                        },
                                    }}
                                >
                                    <img
                                        width={'120px'}
                                        height='35px'
                                        src={'./photos/yuanfudao-logo.jpg'}
                                        alt="yuanfudao-logo"
                                    />
                                    <Box sx={{ 
                                        fontSize: '14px',
                                        userSelect: 'none',
                                        paddingY: 2,
                                        "@media screen and (max-width: 650px)": {
                                            p: 3
                                        },
                                    }}>
                                        {t('description.yuanfudao_intro')}
                                    </Box>
                                </StyledCard>
                            </Box>
                        </StyledCard>
                    </Box>

                </Box>
            </FlexBox>
        </Box>
    );  
};

export default WorkExp;