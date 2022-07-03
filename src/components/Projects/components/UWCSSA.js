import React from 'react';
import Box from '@mui/material/Box';
import StyledCard from "../../common/StyledCard";
import StyledTextContainer from "../../common/StyledTextContainer";
import { useTranslation } from "react-i18next";

const UWCSSA = () => {

    const { t }  = useTranslation();

    return (
        <StyledCard
            // data-aos="fade-up"
            sx={{
                // width: '90%',
                height: '74vh',
                m: 0,
                "@media screen and (max-width: 1500px)": {
                    width: '100%',
                },
            }}>
            <Box>
                
            </Box>
            <StyledTextContainer>
                {t('description.work_content')}
            </StyledTextContainer>
        </StyledCard>
    )
}

export default UWCSSA;