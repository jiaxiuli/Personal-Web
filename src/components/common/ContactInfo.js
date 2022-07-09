import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import anime from 'animejs/lib/anime.es.js';
import $ from 'jquery';
import Tooltip from '@mui/material/Tooltip';
import StyledTextContainer from './StyledTextContainer';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from "react-i18next";
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledBox = styled(Box)(({theme}) => ({
    width: '25px',
    height: '25px',
    padding: '8px',
    margin: '0 8px',
    cursor: 'pointer',
    borderRadius: '12px',
    '&:hover': {
        backgroundColor: '#eee'
    },
    "@media screen and (max-width: 900px)": {
        width: '15px',
        height: '15px',
    },
}));
const ContactInfo = ({ open, setOpen, style }) => {

    const ref = useRef(null);
    const infoRef = useRef(null);
    const { t }  = useTranslation();
    const matches = useMediaQuery('(max-width: 900px)');

    useEffect(() => {
        if (ref && infoRef && !matches) {
            const box = ref.current;
            const info = infoRef.current;
            if (!open) {
                anime({
                    targets: box,
                    width: '50px',
                    duration: 500,
                    easing: 'easeInOutQuad'
                });
                $(info).stop().fadeIn(500);
            } else {
                anime({
                    targets: box,
                    width: '320px',
                    duration: 500,
                    easing: 'easeInOutQuad'
                });
                $(info).stop().fadeOut(500);
            }
        }
    }, [open, ref, infoRef, matches]);


    return (
        <Box
            ref={ref}
            sx={{
                width: '320px',
                height: '50px',
                position: 'fixed',
                top: '100px',
                right: '1vw',
                paddingX: 1,
                boxSizing: 'border-box',
                zIndex: 900,
                background: '#fff',
                borderRadius: '25px',
                display: 'flex',
                justifyContent : 'space-around',
                alignItems: 'center',
                boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
                ...style
            }}
        >
            <StyledBox onClick={() => window.open('https://github.com/jiaxiuli')}>
                <img src='./contact_icon/github.svg' alt='github'/>
            </StyledBox>

            <StyledBox onClick={() => window.open('https://www.linkedin.com/in/jiaxiu-li-80aab9192/')}>
                <img src='./contact_icon/linkedin.svg' alt='linkedin'/>
            </StyledBox>
            <Tooltip
                enterTouchDelay={0}
                leaveTouchDelay={false}
                title={
                    <Box width='200px' height='auto' display='flex' flexDirection='column' alignItems='center'>
                        <img src='./photos/QRCode.jpg' width='100%' alt='wechat'/>
                        <Box pt={1} pb={0.5}>{t('description.weChatNo')}</Box>
                    </Box>
                }
                arrow
            >
                <StyledBox>
                    <img src='./contact_icon/wechat.svg' alt='wechat'/>
                </StyledBox>
            </Tooltip>

            <Tooltip
                enterTouchDelay={0}
                leaveTouchDelay={false}
                title={
                    <Box width='290px' paddingX={1} paddingY={2}>
                        <Box
                            sx={{
                                mb: 1,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <StyledTextContainer>lijiaxiu1020@gmail.com</StyledTextContainer>
                            <IconButton aria-label="copy" onClick={() => navigator.clipboard.writeText('lijiaxiu1020@gmail.com', true)}>
                                <ContentCopyIcon sx={{color: '#fff'}} />
                            </IconButton>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <StyledTextContainer>jiaxiu_li@126.com</StyledTextContainer>
                            <IconButton aria-label="copy" onClick={() => navigator.clipboard.writeText('jiaxiu_li@126.com', true)}>
                                <ContentCopyIcon sx={{color: '#fff'}} />
                            </IconButton>
                        </Box>
                    </Box>
                }
                arrow
            >
                <StyledBox>
                    <img width='100%' height='100%' src='./contact_icon/email.svg' alt='email'/>
                </StyledBox>
            </Tooltip>



            <Tooltip
                enterTouchDelay={0}
                leaveTouchDelay={false}
                title={
                    <Box width='290px' paddingX={1} paddingY={2}>
                         {/* <Box
                            sx={{
                                mb: 1,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <StyledTextContainer>{t('description.canada')}</StyledTextContainer>
                            <StyledTextContainer>+1 226-787-4514</StyledTextContainer>
                            <IconButton aria-label="copy" onClick={() => navigator.clipboard.writeText('+12267874514', true)}>
                                <ContentCopyIcon sx={{color: '#fff'}} />
                            </IconButton>
                        </Box> */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <StyledTextContainer>{t('description.china')}</StyledTextContainer>
                            <StyledTextContainer>+86 18173305469</StyledTextContainer>
                            <IconButton aria-label="copy" onClick={() => navigator.clipboard.writeText('+8618173305469', true)}>
                                <ContentCopyIcon sx={{color: '#fff'}} />
                            </IconButton>
                        </Box>
                    </Box>
                }
                arrow
            >
                <StyledBox>
                    <img width='100%' height='100%' src='./contact_icon/phone.svg' alt='phone'/>
                </StyledBox>
            </Tooltip>

            <Box
                ref={infoRef}
                sx={{
                    position: 'absolute',
                    width: '30px',
                    height: '30px',
                    cursor: 'pointer',
                    "@media screen and (max-width: 900px)": {
                        display: 'none'
                    },
                }}
                onClick={() => setOpen(true)}
            >
                <img width='100%' height='100%' src='./contact_icon/info.svg' alt='info'/>
            </Box>
        </Box>
    )
}

export default ContactInfo;