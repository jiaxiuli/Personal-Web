/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useRef, useState } from 'react';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import StyledTextContainer from "../common/StyledTextContainer";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { projectList } from '../Projects/Projects';

const ProjectSwitch = ({ currentIndex, handleSelectProject }) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const icon = useRef();

    useEffect(() => {
        if (icon.current) {
            setAnchorEl(icon.current);
        }
    }, [icon.current]);




    const handleToggleMenu = (open) => {
        setMenuOpen(open);
    }

    const handleItemClick = (index) => {
        handleSelectProject(index);
        setMenuOpen(false);
    }



    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                paddingY: 1,
                paddingX: 3,
                borderRadius: '21px',
                transition: 'all 0.5s',
                maxWidth: '80vw',
                '&:hover': {
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
                }
            }}
            ref={icon}
            onMouseEnter={() => handleToggleMenu(true)}
            onMouseLeave={() => handleToggleMenu(false)}
        >
            <StyledTextContainer
                sx={{
                    fontSize: 20,
                    fontWeight: 600,
                    "@media screen and (max-width: 1300px)": {
                        fontSize: 16,
                    },
                    "@media screen and (max-width: 900px)": {
                        fontSize: 14,
                    }
                }}
            >
                {projectList[currentIndex].title}
            </StyledTextContainer>
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    ml: 2,
                    "@media screen and (max-width: 800px)": {
                        ml: 1,
                    }
                }}
            >
                <ArrowDropDownIcon />
            
                <Popper
                    open={menuOpen}
                    anchorEl={anchorEl}
                    placement={'bottom'}
                    transition 
                    sx={{ zIndex: 100 }}
                >
                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={500}>
                        <Paper>
                            <MenuList>
                            {
                            projectList.map((item) => (
                                <MenuItem
                                    key={item.title}
                                    onClick={() => handleItemClick(item.index)}
                                >
                                    <StyledTextContainer
                                        sx={{
                                            fontSize: 20,
                                            p: 1,
                                            paddingX: 2,
                                            whiteSpace: 'normal',
                                            maxWidth: '70vw',
                                            fontWeight:
                                                item.title === projectList[currentIndex].title ?
                                                600 : '',
                                            color: item.title === projectList[currentIndex].title ?
                                                '#1769aa' : ''
                                        }}
                                    >
                                        {item.title}
                                    </StyledTextContainer>
                                </MenuItem>
                            ))
                            }
                            </MenuList>
                        </Paper>
                    </Fade>
                    )}
                </Popper>
            </Box>
        </Box>
        
    )
}

export default ProjectSwitch;