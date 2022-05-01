import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import style from './TopBar.less';

const TabsContainer = styled(Box)(({theme}) => ({
    width: '100%',
    backgroundColor: '#000',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '2px 60px',
}));

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
    ))({
        width: 'fit-content',
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 50,
            width: '100%',
            backgroundColor: '#fff',
        },
    });

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'uppercase',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.6)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);
  

const TopBar = (props) => {


    const handleChange = (event, newValue) => {
      props.handleTabChange(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} className={style.main}>
            <TabsContainer>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Avatar sx={{ width: 56, height: 56 }} src="./photo.png"/>
                    <Box className={style.topBarText}>
                        <div className={style.name}>Jiaxiu Li</div>
                        <div className={style.intro}>Software Engineer & Music Lover</div>
                    </Box>
                </Box>
                <StyledTabs
                    value={props.tabValue}
                    onChange={handleChange}
                >
                    <StyledTab label="About" />
                    <StyledTab label="Education" />
                    <StyledTab label="Work Experience" />
                    <StyledTab label="Projects" />
                    <StyledTab label="Other & contact" />
                </StyledTabs>
            </TabsContainer>
        </Box>
    )
}

export default TopBar;