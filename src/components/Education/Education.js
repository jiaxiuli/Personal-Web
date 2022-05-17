/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-17 11:11:55
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/Education/Education.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './Education.less';
import { styled } from '@mui/material/styles';
import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import StyledCard from "../common/StyledCard";
import FlexBox from "../common/FlexBox";
import UniveristyInfo from "../common/UniversityInfo";
import LinkIcon from '@mui/icons-material/Link';
import IntroItems from "../common/IntroItems";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { useTranslation } from "react-i18next";

const Paragraph = styled(Box)(({theme}) => ({
    padding: '8px 0px'
}));

const Education  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box
            className={style.main}
            style={{ minHeight: 'calc(100vh - 72px)' }}
        >
            <TitleContainer title={t('description.edu')}/>
            <FlexBox>
                <Box
                    className={style['text-container']}
                >
                        <StyledCard
                            data-aos="fade-up"
                            sx={{
                                width: '90%',
                                margin: '4px 0px',
                                "@media screen and (max-width: 800px)": {
                                    width: '100%',
                                },
                            }}>
                            <StyledTextContainer
                                fontWeight={600}
                                style={{
                                    marginBottom: '8px'
                                }}
                            >
                                {t('description.edu_undergraduate')}
                            </StyledTextContainer>
                            <Box  
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: '8px',
                                    "@media screen and (max-width: 650px)": {
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    },
                                }}
                            >
                                {/* <img
                                    alt="undergraduate"
                                    className={style['img-undergraduate']}
                                    src="./photos/edu_undergraduate.jpg"
                                /> */}
                                <LazyLoadImage
                                    effect="opacity"
                                    alt="undergraduate"
                                    className={style['img-undergraduate']}
                                    src="./photos/edu_undergraduate.jpg" // use normal <img> attributes as props
                                    />
                                <Box
                                    sx={{
                                        marginLeft: '48px',
                                        width: '100%',
                                        "@media screen and (max-width: 1300px)": {
                                            marginLeft: '24px',
                                        },
                                        "@media screen and (max-width: 900px)": {
                                            marginLeft: '16px',
                                        },
                                        "@media screen and (max-width: 650px)": {
                                            marginLeft: '0px',
                                        },
                                    }}>
                                        <Box
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                "@media screen and (max-width: 650px)": {
                                                    justifyContent: 'center',
                                                },
                                            }}
                                        >
                                            <Box>
                                                <UniveristyInfo
                                                    path='./photos/hut.jpg'
                                                    schoolInfo={{   
                                                        name: 'Hunan University of Technology',
                                                        location: 'Hunan Province, China',
                                                        major: 'Internet of Things',
                                                        time: '2015.9 - 2019.6'
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            padding: '8px 0px'
                                        }}
                                    >
                                        <StyledTextContainer
                                            fontWeight={500}
                                            style={{
                                                marginBottom: '8px'
                                            }}
                                        >
                                            {t('description.edu_core_course')}
                                        </StyledTextContainer>
                                        <StyledTextContainer fontSize='16px'>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    "@media screen and (max-width: 650px)": {
                                                        flexDirection: 'column',
                                                    },
                                                }}    
                                            >
                                                <Box>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_c')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_java')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_dataStructure')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_network')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_OS')}/>
                                                </Box>
                                                <Box>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_database')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_communication')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_chip')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_sensor')}/>
                                                </Box>
                                            </Box>
                                        </StyledTextContainer>
                                    </Box>
                                </Box>
                            </Box>
                            <StyledTextContainer
                                fontWeight={500}
                            >
                                {t('description.edu_story')}
                            </StyledTextContainer>
                            <StyledTextContainer>
                                <Paragraph>
                                    {t('description.undergraduate_p1')}
                                </Paragraph>
                                <Paragraph>
                                    {t('description.undergraduate_p2')}
                                </Paragraph>
                                <Paragraph>
                                    {t('description.undergraduate_p3')}
                                </Paragraph>
                                <Paragraph>
                                    {t('description.undergraduate_p4')}
                                </Paragraph>
                            </StyledTextContainer>
                        </StyledCard>
                        <StyledCard
                            data-aos="fade-up"
                            sx={{
                                width: '90%',
                                margin: '4px 0px',
                                "@media screen and (max-width: 800px)": {
                                    width: '100%',
                                },
                            }}
                        >
                            <StyledTextContainer
                                fontWeight={600}
                                style={{
                                    marginBottom: '8px'
                                }}
                            >
                                {t('description.edu_postgraduate')}
                            </StyledTextContainer>
                            <Box  
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: '8px',
                                    "@media screen and (max-width: 650px)": {
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    },
                                }}
                            >
                                {/* <img
                                    alt="postgraduate"
                                    className={style['img-postgraduate']}
                                    src="./photos/edu_postgraduate.jpg"
                                /> */}
                                <LazyLoadImage
                                    effect="opacity"
                                    alt="postgraduate"
                                    className={style['img-postgraduate']}
                                    src="./photos/edu_postgraduate.jpg" // use normal <img> attributes as props
                                />
                                <Box
                                    sx={{
                                        marginLeft: '48px',
                                        width: '100%',
                                        "@media screen and (max-width: 1300px)": {
                                            marginLeft: '24px',
                                        },
                                        "@media screen and (max-width: 900px)": {
                                            marginLeft: '16px',
                                        },
                                        "@media screen and (max-width: 650px)": {
                                            marginLeft: '0px',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            "@media screen and (max-width: 650px)": {
                                                justifyContent: 'center',
                                            },
                                        }}
                                    >
                                        <Box>
                                            <UniveristyInfo
                                                path='./photos/uw.jpg'
                                                schoolInfo={{
                                                    name: 'University of Windsor',
                                                    location: 'Ontario, Canada',
                                                    major: 'Applied Computing',
                                                    time: '2019.9 - 2021.6'
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: 'auto',
                                            padding: '12px 0px',
                                        }}
                                    >
                                        <StyledTextContainer
                                            fontWeight={500}
                                            style={{
                                                marginBottom: '8px'
                                            }}
                                        >
                                            {t('description.edu_core_course')}
                                        </StyledTextContainer>
                                        <StyledTextContainer fontSize='16px'>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    "@media screen and (max-width: 650px)": {
                                                        flexDirection: 'column',
                                                    },
                                                }}    
                                            >
                                                <Box>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_algorithm')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_acc')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_adt')}/>
                                                </Box>
                                                <Box>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_software')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_sysPro')}/>
                                                    <IntroItems
                                                        showIcon={false}
                                                        content={t('description.edu_security')}/>
                                                </Box>
                                            </Box>
                                        </StyledTextContainer>
                                    </Box>
                                </Box>
                            </Box>
                            <StyledTextContainer
                                fontWeight={500}
                            >
                                {t('description.edu_story')}
                            </StyledTextContainer>
                            <StyledTextContainer>
                                <Paragraph>
                                    {t('description.postgraduate_p1')}
                                </Paragraph>
                                <Paragraph>
                                    {t('description.postgraduate_p2')}
                                </Paragraph>
                                <Paragraph>
                                    {t('description.postgraduate_p3')}
                                </Paragraph>
                                <div style={{
                                    height: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: '600'
                                }}>
                                    <LinkIcon style={{ marginRight: '8px' }}/>
                                    <a
                                        href="https://github.com/jiaxiuli/HealthCare-using-Django"
                                        target="view_frame"
                                    >
                                            HealthCare-using-Django
                                    </a>
                                </div>
                                <Paragraph>
                                    {t('description.postgraduate_p4')}
                                </Paragraph>
                            </StyledTextContainer>
                        </StyledCard>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default Education;