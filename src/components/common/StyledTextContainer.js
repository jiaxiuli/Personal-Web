import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledTextContainer = styled(Box)(({fontWeight=400, fontSize='18px'}) => ({
    fontSize,
    fontWeight,
    width: 'auto',
    fontFamily: "'Fira Code', monospace",
    padding: '8px',
    lineHeight: '26px',
    userSelect: 'none',
    "@media screen and (max-width: 1300px)": {
        fontSize: '14px',
    },
}));

export default StyledTextContainer;