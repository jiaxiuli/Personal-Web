/*
 * @Author: 李佳修
 * @Date: 2022-05-02 23:21:17
 * @LastEditTime: 2022-05-07 10:39:11
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/NavigatorList/NavigatorList.js
 */
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useRef, useState } from 'react';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';

const StyledSelection = styled(Box)(({theme}) => ({
    fontSize: '14px',
    fontFamily: "'Libre Baskerville', serif",
    fontWeight: 700,
    lineHeight: '24px',
    userSelect: 'none',
}));

const SelectionBar = styled(Box)(({theme}) => ({
    position: 'absolute',
    left: 0,
    width: '4px',
    height: '16px',
    background: '#B0734F'
}));

const titleList = ['description.about', 'description.edu',
    'description.work', 'description.project', 'description.other_con'];

const NavigatorList = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const icon = useRef();
    const { t }  = useTranslation();

    useEffect(() => {
        if (icon.current) {
            setAnchorEl(icon.current);
        }
    }, [icon.current]);

    const handleToggleMenu = (open) => {
        setMenuOpen(open);
    }

    const titleSelectionClicked = (index) => {
        props.onChange(null, index);
        handleToggleMenu(false);
    }

    return (
        <Box
            ref={icon}
            onMouseEnter={() => handleToggleMenu(true)}
            onMouseLeave={() => handleToggleMenu(false)}
            sx={{
                position: 'relative',
                cursor: 'pointer',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <MenuIcon sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '35px' }} />
            <Popper
                open={menuOpen}
                anchorEl={anchorEl}
                placement={'bottom'}
                transition 
                sx={{ zIndex: 10 }}
            >
                {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                          <MenuList>
                                {
                                    titleList.map((title, index) => (
                                        <MenuItem
                                            key={index}
                                            onClick={() => titleSelectionClicked(index)}
                                            sx={{ color: index === props.tabValue ? '#B0734F' : '#000' }}
                                        >
                                            <SelectionBar sx={{ display: index === props.tabValue ? 'block' : 'none' }} />
                                            <StyledSelection>{t(title)}</StyledSelection>
                                        </MenuItem>
                                    ))
                                }
                        </MenuList>
                    </Paper>
                </Fade>
                )}
            </Popper>
        </Box>
    );
}

export default NavigatorList;