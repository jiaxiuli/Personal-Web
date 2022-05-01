import React from "react";
import Box from '@mui/material/Box';
import style from './Card.less';

const Card = (props) => {

    return (
        <Box
            className={style.main}
            sx={{ 
                background: props.background,
                height: props.isFirst ? 'calc(100vh - 150px)' : 'calc(100vh - 84px)'
            }}
        >
            <img src="./logo512.png"/>
        </Box>
    );  
};

export default Card;