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

const ListItem = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(),
  marginBottom: theme.spacing(),
}));

const chips = ['React.js', 'JavaScript', 'MUI', 'GraphQL', 'AWS', 'Serverless']

const Bhpm = () => {

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
                        display: 'flex',
                        "@media screen and (max-width: 1000px)": {
                            display: 'none'
                        }
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: '45%',
                            height: 'auto',
                            flexDirection: 'column',
                            '@media screen and (max-width: 1000px)': {
                                width: '100%',
                            }
                        }}
                    >
                        {/* <ImageList /> */}
                        <Box className={style['img-container-bhpm']}>
                            <LazyLoadImage
                                effect="opacity"
                                alt="bhpm"
                                className={style['img-UWCSSA']}
                                src="./photos/bhpm.png" // use normal <img> attributes as props
                            />
                        </Box>
                        <StyledCard sx={{m: 0, mt: 1, flex: 1}}>
                            <StyledTextContainer
                                sx={{
                                    fontSize: '16px'
                                }}
                            >
                                <StyledTextContainer
                                    sx={{ fontSize: '16px', mb: 2 }}
                                    fontWeight={600}
                                >
                                    {t('description.introduction')}
                                </StyledTextContainer>
                                <Box mb={2.5}>{t('description.bhpm_desc1')}</Box>
                                <Box mb={2.5}>{t('description.bhpm_desc2')}</Box>
                                <Box mb={2.5}>{t('description.bhpm_desc3')}</Box>
                            </StyledTextContainer>
                        </StyledCard>
                    </Box>
                    <Box flex={1} pl={2}>
                        <Box
                            pl={2}
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box>
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
                            </Box>

                            <StyledCard
                                sx={{
                                    flexShrink: 0,
                                    display: 'flex',
                                    width: 'fit-content',
                                    height: 'fit-content',
                                    paddingY: 0.5,
                                    m: 0
                                }}
                            >
                                <ProjectLink
                                    img={'./stack_icons/github.png'}
                                    desc='GitHub'
                                    link='https://github.com/jiaxiuli/bhpmJS/tree/main'
                                />
                                <ProjectLink
                                    img={'./stack_icons/bhpm_logo.png'}
                                    desc='Website'
                                    link='https://bhpm.ca/'
                                />
                            </StyledCard>
                        </Box>
                        <Box sx={{paddingX: 2, mt: 2}}>
                            <StyledTextContainer sx={{ mt: 0 }}>
                                <StyledTextContainer
                                    fontWeight={600}
                                >
                                    {t('description.highlights')}
                                </StyledTextContainer>
                                {
                                    [
                                        t('description.bhpm_highlight1'),
                                        t('description.bhpm_highlight2'),
                                        t('description.bhpm_highlight3'),
                                        t('description.bhpm_highlight4'),
                                    ].map((item, index) => (
                                        <Box display='flex' alignItems='center' m={3} key={index}>
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

                {/* ??????????????????1000 */}
                <Box
                    sx={{
                        display: 'none',
                        "@media screen and (max-width: 1000px)": {
                            display: 'block'
                        }
                    }}
                >
                   
                    <Box>
                        <StyledCard
                            sx={{
                                flexShrink: 0,
                                display: 'flex',
                                width: 'fit-content',
                                height: 'fit-content',
                                paddingY: 0.5,
                                m: 0
                            }}
                        >
                            <ProjectLink
                                img={'./stack_icons/github.png'}
                                desc='GitHub'
                                link='https://github.com/jiaxiuli/bhpmJS/tree/main'
                            />
                            <ProjectLink
                                img={'./stack_icons/bhpm_logo.png'}
                                desc='Website'
                                link='https://bhpm.ca/'
                            />
                        </StyledCard>
                        <Box display='flex' flexWrap='wrap' mt={2}>
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
                    </Box>
                    <Box className={style['img-container-bhpm']}>
                        <LazyLoadImage
                            effect="opacity"
                            alt="bhpm"
                            className={style['img-UWCSSA']}
                            src="./photos/bhpm.png" // use normal <img> attributes as props
                        />
                    </Box>
                    <StyledCard sx={{m: 0, mt: 1}}>
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
                            <Box mb={2}>{t('description.bhpm_desc1')}</Box>
                            <Box mb={2}>{t('description.bhpm_desc2')}</Box>
                            <Box mb={2}>{t('description.bhpm_desc3')}</Box>
                        </StyledTextContainer>
                    </StyledCard>
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
                                    t('description.bhpm_highlight1'),
                                    t('description.bhpm_highlight2'),
                                    t('description.bhpm_highlight3'),
                                    t('description.bhpm_highlight4'),
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

export default Bhpm;