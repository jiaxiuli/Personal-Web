import React from 'react';
import FaceHTML from './old/facedetect.html';
import StyledCard from "../../common/StyledCard";
import StyledTextContainer from "../../common/StyledTextContainer";
import { useTranslation } from "react-i18next";

const FaceRecognition = () => {
    console.log(FaceHTML, 888);

    const { t }  = useTranslation();

    return (
        <StyledCard
            // data-aos="fade-up"
            sx={{
                // width: '90%',
                height: '74vh',
                p :2,
                m: 0,
                "@media screen and (max-width: 1500px)": {
                    width: '100%',
                },
            }}>
            {/* <StyledTextContainer>
                {t('description.work_content')}
            </StyledTextContainer> */}
            <iframe
                srcdoc={FaceHTML}
                width="100%"
                height="100%"
                title="faceDetect">
            </iframe>
        </StyledCard>
    )
}

export default FaceRecognition;