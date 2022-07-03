import React from 'react';
import Tetris from './old/SquareGame.html';
import StyledCard from "../../common/StyledCard";
// import { useTranslation } from "react-i18next";

const TetrisGame = () => {


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
                srcDoc={Tetris}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="Tetris">
            </iframe>
        </StyledCard>
    )
}

export default TetrisGame;