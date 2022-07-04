import React from 'react';
import Box from '@mui/material/Box';
import StyledTextContainer from './StyledTextContainer';
import style from './common.less';

const ProjectLink  = ({ img, desc, link }) => {
    return (
        <Box
            width='fit-content'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            marginX={0.5}
            sx={{
                p: 0.5,
                cursor: 'pointer',
                borderRadius: '8px',
                '&:hover': {
                    background: '#e0e0e0'
                }
            }}
            onClick={() => window.open(link)}
        >
            <img className={style['project-link-img']} src={img} alt='link'/>
            <StyledTextContainer
                sx={{
                    lineHeight: '12px',
                    mt: 1,
                    fontSize: '12px !important',
                    '@media screen and (max-width: 1300px)': {
                        mt: 0.6
                     },
                     '@media screen and (max-width: 1000px)': {
                        display: 'none'
                     },
                   
                }}>
                {desc}
            </StyledTextContainer>
        </Box>
    )
}

export default ProjectLink;