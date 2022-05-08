import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

const StyledCard = styled(Card)(({theme}) => ({
    boxSizing: 'border-box',
    padding: '12px',
    margin: '0px 4px',
    borderRadius: '12px',
    boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;',
    "@media screen and (max-width: 900px)": {
        margin: '4px 0px',
    },
}));

export default StyledCard;