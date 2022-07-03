import React from 'react';
import FaceHTML from './old/facedetect.html';
import StyledCard from "../../common/StyledCard";
// import { useTranslation } from "react-i18next";

const FaceRecognition = () => {


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
                srcDoc={FaceHTML}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="faceDetect">
            </iframe>
        </StyledCard>
    )
}

export default FaceRecognition;