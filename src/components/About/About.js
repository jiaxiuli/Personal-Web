/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-17 11:13:43
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/About/About.js
 */
import React from "react";
import Box from '@mui/material/Box';
import style from './About.less';
import StyledTextContainer from "../common/StyledTextContainer";
import TitleContainer from "../common/TitleContainer";
import FlexBox from "../common/FlexBox";
import StyledCard from "../common/StyledCard";
import Avatar from '@mui/material/Avatar';
import ResumeDownload from '../common/ResumeDownload';
import IntroItems from "../common/IntroItems";
import StackItems from '../common/StackItems';
import { useTranslation } from "react-i18next";

const About  = () => {
    
    const { t }  = useTranslation();

    return (
        <Box
            data-aos="fade"
            data-aos-duration="1000"
            className={style.main}
            style={{ minHeight: 'calc(100vh - 72px)' }}
        >
            <TitleContainer title={t('description.about')}/>
            <FlexBox>
                <Box className={style['text-container']}>
                    <FlexBox>
                        <Avatar
                            variant="circular"
                            sx={{
                                width: 180,
                                height: 180,
                                marginBottom: '12px',
                                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                                "@media screen and (max-width: 1200px)": {
                                    width: 120,
                                    height: 120,
                                    marginBottom: '8px',
                                },
                                "@media screen and (max-width: 1000px)": {
                                    width: 80,
                                    height: 80,
                                    marginBottom: '8px',
                                },
                            }}
                            src="./about_photo.jpg"
                        />
                    </FlexBox>
                    <FlexBox>
                        <StyledTextContainer fontWeight={600}>
                            {t('description.about_hi')}
                        </StyledTextContainer>
                    </FlexBox>
                    <FlexBox>
                        <StyledTextContainer fontWeight={600}>
                            {t('description.about_welcome')}
                        </StyledTextContainer>
                    </FlexBox>
                    <FlexBox>
                       <ResumeDownload />
                    </FlexBox>
                    <Box sx={{
                        display: 'flex',
                        marginTop: '12px',
                        flexDirection: 'row',
                        "@media screen and (max-width: 900px)": {
                            flexDirection: 'column',
                        }
                    }}>
                        <StyledCard sx={{ flex: 1 }}>
                            <StyledTextContainer fontWeight={600}>
                                {t('description.about_Iam')}
                            </StyledTextContainer>
                            <StyledTextContainer fontSize='16px'>
                                <IntroItems
                                    iconPath={'./icons/graduate_icon.png'}
                                    content={t('description.about_graduate')}/>
                                <IntroItems
                                    iconPath={'./icons/work_icon.png'}
                                    content={t('description.about_current')}/>
                                <IntroItems
                                    iconPath={'./icons/learn_icon.png'}
                                    content={t('description.about_learn')}/>
                                <IntroItems
                                    iconPath={'./icons/deploy_icon.png'}
                                    content={t('description.about_deploy')}/>
                                <IntroItems
                                    iconPath={'./icons/passion_icon.png'}
                                    content={t('description.about_passion')}/>
                                <IntroItems
                                    iconPath={'./icons/music_icon.png'}
                                    content={t('description.about_music')}/>
                            </StyledTextContainer>
                        </StyledCard>
                        <StyledCard sx={{ flex: 1 }}>
                            <StyledTextContainer fontWeight={600}>
                                {t('description.about_techStack')}
                            </StyledTextContainer>
                            <StyledTextContainer>
                                <Box sx={{ display: 'flex'}}>
                                    <Box sx={{ marginRight: '12px', flex: 1 }}>
                                        <StackItems 
                                            iconPath='./stack_icons/react.png'
                                            title='React.js'
                                            items={['Redux', 'Router', 'Native']}/>
                                        <StackItems 
                                            iconPath='./stack_icons/vue.svg'
                                            title='Vue.js'
                                            items={['Vuex', 'Router']}/>
                                        <StackItems 
                                            iconPath='./stack_icons/css.png'
                                            title='CSS Pre-processor'
                                            items={['Sass', 'Less']}/>
                                        <StackItems 
                                            iconPath='./stack_icons/api.png'
                                            title='APIs'
                                            items={['Ajax', 'Axios', 'REST', 'GraphQL']}/>
                                        <StackItems 
                                            iconPath='./stack_icons/database.png'
                                            title='Database'
                                            items={['MySQL', 'MongoDB']}/>
                                    </Box>
                                    <Box style={{flex: 1}}>
                                        <StackItems 
                                            iconPath='./stack_icons/tool.png'
                                            title='Other Tools & Libs'
                                            items={['jQuery', 'Bootstrap', 'Express', 'Git']}/>
                                        <StackItems 
                                            iconPath='./stack_icons/programming-language.png'
                                            title='Programming Languages'
                                            languages={[{
                                                name: 'HTML',
                                                path: './stack_icons/html.png'
                                            },{
                                                name: 'CSS',
                                                path: './stack_icons/css.png'
                                            },{
                                                name: 'Javascript',
                                                path: './stack_icons/js.png'
                                            },{
                                                name: 'Typescript',
                                                path: './stack_icons/ts.png'
                                            },{
                                                name: 'Python',
                                                path: './stack_icons/python.png'
                                            },{
                                                name: 'Java',
                                                path: './stack_icons/java.png'
                                            }]}/>
                                        <StackItems 
                                            iconPath='./stack_icons/platform.png'
                                            title='Platforms & Editors'
                                            languages={[{
                                                name: 'Visual Studio Code',
                                                path: './stack_icons/vscode.svg'
                                            },{
                                                name: 'Pycharm',
                                                path: './stack_icons/pycharm.png'
                                            },{
                                                name: 'Github',
                                                path: './stack_icons/github.png'
                                            },{
                                                name: 'Gerrit',
                                                path: './stack_icons/gerrit.svg'
                                            },{
                                                name: 'Gitlab',
                                                path: './stack_icons/gitlab.png'
                                            },{
                                                name: 'Amazon Web Services',
                                                path: './stack_icons/aws.svg'
                                            }]}/>
                                    </Box>
                                </Box>
                            </StyledTextContainer>
                        </StyledCard>
                    </Box>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default About;