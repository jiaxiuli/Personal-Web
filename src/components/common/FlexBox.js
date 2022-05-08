import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const FlexBox = styled(Box)(({theme}) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export default FlexBox;