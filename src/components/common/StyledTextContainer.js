import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledTextContainer = styled(Box)(({fontWeight=400, fontSize='18px'}) => ({
    fontSize,
    fontWeight,
    width: 'auto',
    fontFamily: "'Fira Code', monospace",
    lineHeight: '26px',
    userSelect: 'none',
    "@media screen and (max-width: 1300px)": {
        fontSize: '14px',
    },
    "@media screen and (max-width: 1000px)": {
        lineHeight: '22px',
    },
    "@media screen and (max-width: 900px)": {
        lineHeight: '18px',
    },
}));

export default StyledTextContainer;