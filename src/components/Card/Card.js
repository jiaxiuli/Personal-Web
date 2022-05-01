import React from "react";
import Box from '@mui/material/Box';
import style from './Card.less';
import { useTranslation } from "react-i18next";

const Card = (props) => {

    const { t }  = useTranslation();

    return (
        <Box className={style.main} style={{ background: props.color }}>
            <img src="./logo512.png"/>
        </Box>
    );  
};

export default Card;