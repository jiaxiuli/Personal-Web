import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../redux/slice/generalSlice';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentLanguage, setCurrentLanguage] = useState('Eng');
    const icon = useRef();
    const dispatch = useDispatch();
    const { i18n }  = useTranslation();

    const languageState = useSelector((state) => state.general.language);
    const languageList = useSelector((state) => state.general.languageList);

    useEffect(() => {
        if (languageState) {
            setCurrentLanguage(languageState.languageName);
        }
    }, [languageState]);

    useEffect(() => {
        if (icon.current) {
            setAnchorEl(icon.current);
        }
    }, [icon.current]);

    const handleToggleMenu = (open) => {
        setMenuOpen(open);
    }

    const handleChangeLanguage = (lang) => {
        const item = languageList.find((ele) => ele.currentLanguage === lang);
        dispatch(setLanguage(item));
        i18n.changeLanguage(lang);
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
                width: '60px',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <LanguageIcon sx={{ color: '#fff' }} />
            <div style={{ 
                color: '#fff',
                padding: '0px 4px',
                fontSize: '12px',
                fontFamily: "'Libre Baskerville', serif" 
            }}>{currentLanguage}</div>
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
                            <MenuItem onClick={() => handleChangeLanguage('en_us')}>English</MenuItem>
                            <MenuItem onClick={() => handleChangeLanguage('zh_cn')}>中文</MenuItem>
                        </MenuList>
                    </Paper>
                </Fade>
                )}
            </Popper>
        </Box>
    );
}

export default LanguageSwitch;