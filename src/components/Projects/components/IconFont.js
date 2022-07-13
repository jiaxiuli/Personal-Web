import React from 'react';
import Box from '@mui/material/Box';
import StyledCard from "../../common/StyledCard";
import StyledTextContainer from "../../common/StyledTextContainer";
import { useTranslation } from "react-i18next";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { Chip } from '@mui/material';
import ProjectInfo from '../../common/ProjectInfo';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ListItem = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(),
  marginBottom: theme.spacing(),
}));

const chips = ['React.js', 'TypeScript', 'Axios', 'REST apis', 'Node.js']

const IconFont = () => {

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
                        minHeight: '100%',
                        height: 'auto',
                        "@media screen and (max-width: 1000px)": {
                            display: 'none'
                        }
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex'
                        }}
                    >
                        <Box width='68%'>
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
                                    startTime='2021.06'
                                    endTime={'2021.07'}
                                />
                            </Box>
                            <Box mr={2}>
                                <video
                                    controls
                                    poster='./videos/iconFont_cover.png'
                                    width="100%"
                                    style={{
                                        borderRadius: '14px',
                                        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                                    }}
                                >
                                    <source src="./videos/iconFont.mp4"
                                            type="video/mp4" />
                                    Sorry, your browser doesn't support embedded videos.
                                </video>
                            </Box>
                        </Box>

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
                                <Box mb={2}>{t('description.iconFont_desc1')}</Box>
                                <Box mb={2}>{t('description.iconFont_desc2')}</Box>
                                <Box mb={2}>{t('description.iconFont_desc3')}</Box>
                                <Box mb={2}>{t('description.iconFont_desc4')}</Box>
                                <Box mb={2}>{t('description.iconFont_desc5')}</Box>
                                
                            </StyledTextContainer>
                        </StyledCard>
                    </Box>
                </Box>

                {/* 屏幕宽度小于1000 */}
                <Box
                    sx={{
                        display: 'none',
                        "@media screen and (max-width: 1000px)": {
                            display: 'block'
                        }
                    }}
                >
                    <Box width='100%'>
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
                                startTime='2021.06'
                                endTime={'2021.07'}
                            />
                        </Box>
                        <Box mr={2}>
                            <video
                                controls
                                width="100%"
                                poster='./videos/iconFont_cover.png'
                                style={{
                                    borderRadius: '14px',
                                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                                }}
                            >
                                <source
                                    src="./videos/iconFont.mp4"
                                    type="video/mp4"
                                />
                                    Sorry, your browser doesn't support embedded videos.
                            </video>
                        </Box>
                    </Box>

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
                            <Box mb={2}>{t('description.iconFont_desc1')}</Box>
                            <Box mb={2}>{t('description.iconFont_desc2')}</Box>
                            <Box mb={2}>{t('description.iconFont_desc3')}</Box>
                            <Box mb={2}>{t('description.iconFont_desc4')}</Box>
                            <Box mb={2}>{t('description.iconFont_desc5')}</Box>
                            
                        </StyledTextContainer>
                    </StyledCard>
                </Box>
        </StyledCard>
    )
}

export default IconFont;
