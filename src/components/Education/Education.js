/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 17:55:37
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
                                    "@media screen and (max-width: 650px)": {
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    },
                                }}
                            >
                                <img
                                    alt="undergraduate"
                                    className={style['img-undergraduate']}
                                    src="./photos/edu_undergraduate.jpg"
                                />
                                <Box
                                    sx={{
                                        marginLeft: '48px',
                                        "@media screen and (max-width: 1300px)": {
                                            marginLeft: '24px',
                                        },
                                        "@media screen and (max-width: 900px)": {
                                            marginLeft: '16px',
                                        },
                                        "@media screen and (max-width: 600px)": {
                                            marginLeft: '0px',
                                        },
                                    }}>
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
                                    "@media screen and (max-width: 650px)": {
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    },
                                }}
                            >
                                <img
                                    alt="postgraduate"
                                    className={style['img-postgraduate']}
                                    src="./photos/edu_postgraduate.jpg"
                                />
                                <Box
                                    sx={{
                                        marginLeft: '48px',
                                        "@media screen and (max-width: 1300px)": {
                                            marginLeft: '24px',
                                        },
                                        "@media screen and (max-width: 900px)": {
                                            marginLeft: '16px',
                                        },
                                        "@media screen and (max-width: 600px)": {
                                            marginLeft: '0px',
                                        },
                                    }}
                                >
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