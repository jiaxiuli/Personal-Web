/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 17:54:19
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/components/Projects/Projects.js
 */
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import style from './Projects.less';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TitleContainer from "../common/TitleContainer";
import FlexBox from "../common/FlexBox";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { useSwiper } from 'swiper/react';
import ProjectSwitch from "../projectSwitch/ProjectSwitch";
import UWCSSA from "./components/UWCSSA";
import './index.css';
import "swiper/css";
import "swiper/css/effect-cards";

export const projectList = [{
    index: 0,
    title: 'University of Windsor Chinese Students & Scholars Association (UWCSSA)',
    component: <UWCSSA />,
},{
    index: 1,
    title: 'Bowell online auction web app',
    component: <UWCSSA />,
},{
    index: 2,
    title: 'Web app of social media using React and NodeJS',
    component: <UWCSSA />,
},{
    index: 3,
    title: '"NFT Digital Collection" lucky draw for Li Auto the 7th anniversary',
    component: <UWCSSA />,
},{
    index: 4,
    title: 'Icon font management platform',
    component: <UWCSSA />,
},{
    index: 5,
    title: 'Health care web application using Django',
    component: <UWCSSA />,
},{
    index: 6,
    title: 'Face recognition and processing',
    component: <UWCSSA />,
},{
    index: 7,
    title: 'Online Tetris Game',
    component: <UWCSSA />,
}]

const SwipeCommiter = ({ currentIndex }) => {
    const swiper = useSwiper();
  
    useEffect(() => {
        swiper.slideTo(currentIndex, 800);
    }, [currentIndex, swiper]);
    return (<></>);
};
  

const Projects  = () => {
    
    const { t }  = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelectProject = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Box
            className={style.main}
            style={{ 
                minHeight: 'calc(100vh - 72px)' 
            }}
        >
            <TitleContainer title={t('description.project')}/>
            <FlexBox flexDirection='column'>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '80%',
                        '@media screen and (max-width: 800px)': {
                            width:'90%'
                        },
                    }}
                >
                    <Button
                        sx={{
                            width: '100px',
                            '@media screen and (max-width: 800px)': {
                                width: '60px',
                            },
                        }}
                        onClick={() => setCurrentIndex((prev) => {
                            if (prev - 1 <= -1) {
                                return projectList.length - 1;
                            } else {
                                return prev - 1;
                            }
                        })}
                    >
                        <ArrowBackIcon />
                    </Button>
                    <Box
                        sx={{
                            display: 'block',
                            '@media screen and (max-width: 800px)': {
                                display: 'none'
                            }
                        }}
                    >
                        <ProjectSwitch
                            currentIndex={currentIndex}
                            handleSelectProject={handleSelectProject}
                        />
                    </Box>
                    <Button
                        sx={{
                            width: '100px',
                            '@media screen and (max-width: 800px)': {
                                width: '60px',
                            },
                        }}
                        onClick={() =>
                            setCurrentIndex((prev) => (prev + 1) % projectList.length)}
                    >
                        <ArrowForwardIcon />
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'none',
                        '@media screen and (max-width: 800px)': {
                            display: 'block'
                        }
                    }}
                >
                    <ProjectSwitch
                        currentIndex={currentIndex}
                        handleSelectProject={handleSelectProject}
                    />
                </Box>
                <Box
                    sx={{
                        width: '80%',
                        '@media screen and (max-width: 1000px)': {
                             width:'85%'
                        },
                    }}
                >
                    <Swiper
                        effect={"cards"}
                        cardsEffect={{
                            slideShadows: false
                        }}
                        grabCursor={true}
                        modules={[EffectCards]}
                        onSlideChange={(e) => setCurrentIndex(e.activeIndex)}
                    >
                        <SwipeCommiter currentIndex={currentIndex}/>
                        {
                            projectList.map((item) => 
                                <SwiperSlide key={item.title}>{item.component}</SwiperSlide>)
                        }
                    </Swiper>
                </Box>
            </FlexBox>
        </Box>
    );  
};

export default Projects;