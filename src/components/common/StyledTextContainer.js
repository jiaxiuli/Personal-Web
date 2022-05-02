import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledTextContainer = styled(Box)(({theme}) => ({
    fontSize: '16px',
    fontFamily: "'Libre Baskerville', serif",
    fontWeight: 600,
    padding: '8px',
    lineHeight: '24px',
    userSelect: 'none',
    "@media screen and (max-width: 1300px)": {
        fontSize: '14px',
    },
    "@media screen and (max-width: 1200px)": {
        fontSize: '13px',
    },
}));

export default StyledTextContainer;