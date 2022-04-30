import React from "react";
import Box from '@mui/material/Box';
import style from './Card.less';

const Card = (props) => {

    return (
        <Box
            className={style.main}
            sx={{ background: props.background }}
        >
            <img src="./logo512.png"/>
        </Box>
    );  
};

export default Card;