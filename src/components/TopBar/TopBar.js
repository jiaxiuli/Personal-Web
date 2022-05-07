import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import NavigatorList from '../NavigatorList/NavigatorList';
import { useTranslation } from 'react-i18next';
import style from './TopBar.less';

const TabsContainer = styled(Box)(({theme}) => ({
    width: '100%',
    backgroundColor: '#1D2640',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: '8px 20px',
    paddingRight: '20px',
    height: '74px',
    borderBottom: '2px solid #f0f0f0',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
    "@media screen and (max-width: 1050px)": {
        padding: '8px 10px',
    },
    "@media screen and (max-width: 450px)": {
        padding: '8px 5px',
    }
}));

const MenuBox = styled(Box)(({theme}) => ({
    display: 'none',
    color: '#fff',
    marginRight: '12px',
    "@media screen and (max-width: 940px)": {
        display: 'flex',
        alignItems: 'center',
    }
}));

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
    ))({
        display: 'flex',
        alignItems: 'center',
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
        "@media screen and (max-width: 940px)": {
            width: 0
        }
    });

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'uppercase',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.pxToRem(14),
        marginRight: theme.spacing(1),
        paddingLeft: '10px',
        paddingRight: '10px',
        color: 'rgba(255, 255, 255, 0.6)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
        "@media screen and (max-width: 1300px)": {
            fontSize: theme.typography.pxToRem(12),
            paddingLeft: '6px',
            paddingRight: '6px',
        },
        "@media screen and (max-width: 1200px)": {
            fontSize: theme.typography.pxToRem(10),
            paddingLeft: '2px',
            paddingRight: '2px',
        },
    }),
);
  

const TopBar = (props) => {

    const { t } = useTranslation();


    const handleChange = (event, newValue) => {
      props.handleTabChange(newValue);
    };

    return (
        <Box className={style.main}>
            <TabsContainer>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Avatar
                        variant="circular"
                        sx={{
                            width: 56,
                            height: 56,
                            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                            "@media screen and (max-width: 450px)": {
                                width: 45,
                                height: 45,
                            },
                            "@media screen and (max-width: 400px)": {
                                display: 'none'
                            },
                        }}
                        src="./photo.png"
                    />
                    <Box className={style.topBarText}>
                        <div className={style.name}>{t("description.name")}</div>
                        <div className={style.intro}>{t("description.intro")}</div>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <StyledTabs
                        scrollButtons="auto"
                        value={props.tabValue}
                        onChange={handleChange}
                    >
                        <StyledTab label={t("description.about")} />
                        <StyledTab label={t("description.edu")} />
                        <StyledTab label={t("description.work")} />
                        <StyledTab label={t("description.project")} />
                        <StyledTab label={t("description.other_con")}/>
                    </StyledTabs>
                    <MenuBox>
                        <NavigatorList onChange={handleChange} tabValue={props.tabValue}/>
                    </MenuBox>
                    <LanguageSwitch />
                </Box>
            </TabsContainer>
        </Box>
    )
}

export default TopBar;