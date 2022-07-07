import React from 'react';
import Box from '@mui/material/Box';
import StyledCard from "../../common/StyledCard";
import StyledTextContainer from "../../common/StyledTextContainer";
import ProjectLink from '../../common/ProjectLink';
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Chip } from '@mui/material';
import style from './common.less';
import ProjectInfo from '../../common/ProjectInfo';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from './ImageListBhpm';

const ListItem = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(),
  marginBottom: theme.spacing(),
}));

const chips = ['Vue.js', 'JavaScript', 'Vant', 'GraphQL', 'animation']

const NTF = () => {

    const { t }  = useTranslation();
    const matches = useMediaQuery('(max-width: 1150px)');

    return (
        <StyledCard
            // data-aos="fade-up"
            sx={{
                // width: '90%',
                overflow: 'auto',
                height: '74vh',
                m: 0,
                "@media screen and (max-width: 1500px)": {
                    width: '100%',
                },
                "@media screen and (max-width: 1000px)": {
                    height: '80vh',
                },
            }}>
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        "@media screen and (max-width: 1000px)": {
                            display: 'none'
                        }
                    }}
                >
                    <Box
                        sx={{
                            height: '100%',
                            paddingX: 4,
                            '@media screen and (max-width: 1000px)': {
                                width: '100%',
                            }
                        }}
                    >
                        {/* <ImageList /> */}
                        <video
                            controls
                            height="100%"
                            style={{
                                borderRadius: '14px',
                                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                            }}
                        >
                            <source src="./videos/NTF.mp4"
                                    type="video/mp4" />
                            Sorry, your browser doesn't support embedded videos.
                        </video>
                    </Box>
                    <Box flex={1} pl={2} height='auto'>
                        <Box
                            pl={2}
                            sx={{flex: 1}}
                        >
                                <Box display='flex' flexWrap='wrap'>
                                    {
                                        chips.map((item) => (
                                            <ListItem key={item}>
                                                <Chip
                                                    sx={{
                                                        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                                                    }}
                                                    color="primary"
                                                    label={item}
                                                    size={matches ? 'small' : 'medium'}
                                                />
                                            </ListItem>
                                        ))
                                    }
                                </Box>
                                <Box paddingY={1}>
                                    <ProjectInfo
                                        role={t('description.frontendDev')}
                                        startTime='2022.06'
                                        endTime='2022.06'
                                    />
                                </Box>
                        </Box>
                        <Box sx={{paddingX: 2, mt: 1}}>
                            <StyledCard sx={{m: 0, mt: 1, flex: 1}}>
                                <StyledTextContainer
                                    sx={{
                                        fontSize: '16px'
                                    }}
                                >
                                    <StyledTextContainer
                                        sx={{ fontSize: '16px', mb: 1 }}
                                        fontWeight={600}
                                    >
                                        {t('description.introduction')}
                                    </StyledTextContainer>
                                    <Box mb={2}>{t('description.NTF_desc1')}</Box>
                                    <Box mb={2}>{t('description.NTF_desc2')}</Box>
                                    <Box mb={2}>{t('description.NTF_desc3')}</Box>
                                    
                                </StyledTextContainer>
                            </StyledCard>
                            <StyledTextContainer sx={{ paddingY: 1 }}>
                                <StyledTextContainer
                                    fontWeight={600}
                                >
                                    {t('description.highlights')}
                                </StyledTextContainer>
                                {
                                    [
                                        t('description.NTF_highlight1'),
                                        t('description.NTF_highlight2'),
                                        t('description.NTF_highlight3'),
                                    ].map((item, index) => (
                                        <Box display='flex' alignItems='center' m={1} key={index}>
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
                </Box>

                {/* 屏幕宽度小于1000 */}
                <Box
                    sx={{
                        width: '100%',
                        display: 'none',
                        "@media screen and (max-width: 1000px)": {
                            display: 'block'
                        }
                    }}
                >
                   
                    <Box display='flex' flexWrap='wrap'>
                        {
                            chips.map((item) => (
                                <ListItem key={item}>
                                    <Chip
                                        sx={{
                                            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                                        }}
                                        color="primary"
                                        label={item}
                                        size={matches ? 'small' : 'medium'}
                                    />
                                </ListItem>
                            ))
                        }
                    </Box>
                    <Box paddingY={1}>
                        <ProjectInfo
                            role={t('description.frontendDev')}
                            startTime='2022.04'
                            endTime='2022.06'
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            "@media screen and (max-width: 550px)": {
                                flexDirection: 'column',
                                alignItems: 'center'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                width: '20%',
                                display: 'flex',
                                alignItems: 'center',
                                mr: 1,
                                "@media screen and (max-width: 740px)": {
                                    width: '30%'
                                },
                                "@media screen and (max-width: 600px)": {
                                    width: '35%'
                                },
                                "@media screen and (max-width: 550px)": {
                                    width: '60%',
                                    mb: 1,
                                    mr: 0
                                },
                                "@media screen and (max-width: 500px)": {
                                    width: '70%',
                                    mb: 1,
                                    mr: 0
                                },
                                "@media screen and (max-width: 450px)": {
                                    width: '80%',
                                    mb: 1,
                                    mr: 0
                                },
                                "@media screen and (max-width: 400px)": {
                                    width: '90%',
                                    mb: 1,
                                    mr: 0
                                }
                            }}
                        >
                            {/* <ImageList /> */}
                            <video
                                controls
                                width="100%"
                                style={{
                                    borderRadius: '14px',
                                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                                }}
                            >
                                <source src="./videos/NTF.mp4"
                                        type="video/mp4" />
                                Sorry, your browser doesn't support embedded videos.
                            </video>
                        </Box>
                        <StyledCard sx={{flex: 1}}>
                            <StyledTextContainer
                                sx={{
                                    fontSize: '16px'
                                }}
                            >
                                <StyledTextContainer
                                    sx={{ fontSize: '16px', mb: 1 }}
                                    fontWeight={600}
                                >
                                    {t('description.introduction')}
                                </StyledTextContainer>
                                <Box mb={2}>{t('description.NTF_desc1')}</Box>
                                <Box mb={2}>{t('description.NTF_desc2')}</Box>
                                <Box mb={2}>{t('description.NTF_desc3')}</Box>
                                
                            </StyledTextContainer>
                        </StyledCard>
                    </Box>
                    <StyledCard sx={{m: 0, mt: 1}}>
                        <StyledTextContainer>
                            <StyledTextContainer
                                sx={{ mb: 1 }}
                                fontWeight={600}
                            >
                                {t('description.highlights')}
                            </StyledTextContainer>
                            {
                                [
                                    t('description.NTF_highlight1'),
                                    t('description.NTF_highlight2'),
                                    t('description.NTF_highlight3'),
                                ].map((item, index) => (
                                    <Box display='flex' alignItems='center' m={2} key={index}>
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
        </StyledCard>
    )
}

export default NTF;