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
                        <StyledCard>
                            <StyledTextContainer fontWeight={600}>
                                {t('description.edu_undergraduate')}
                            </StyledTextContainer>
                            <Box  
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    "@media screen and (max-width: 700px)": {
                                        flexDirection: 'column',
                                    },
                                }}
                            >
                                <img
                                    alt="undergraduate"
                                    className={style['img-undergraduate']}
                                    src="./photos/edu_undergraduate.jpg"
                                />
                                <Box style={{ padding: '0px 24px' }}>
                                    <UniveristyInfo
                                        path='./photos/hut.jpg'
                                        schoolInfo={{
                                            name: 'Hunan University of Technology',
                                            location: 'Hunan Province, China',
                                            time: '2015.9 - 2019.6'
                                        }}
                                    />
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
                                    </StyledTextContainer>
                                </Box>
                            </Box>
                        </StyledCard>

                        <StyledCard style={{ marginTop: '12px' }}>
                            <img
                                alt="postgraduate"
                                className={style['img-postgraduate']}
                                src="./photos/edu_postgraduate.jpg"
                            />
                            <StyledTextContainer>
                                <p>
                                    {t('description.postgraduate_p1')}
                                </p>
                                <p>
                                    {t('description.postgraduate_p2')}
                                </p>
                                <p>
                                    {t('description.postgraduate_p3')}
                                </p>
                                <p>
                                    {t('description.postgraduate_p4')}
                                </p>
                                <p>
                                    {t('description.postgraduate_p5')}
                                </p>
                            </StyledTextContainer>
                        </StyledCard>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default Education;