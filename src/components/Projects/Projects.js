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
    title: 'UWCSSA',
    component: <UWCSSA />,
},{
    index: 1,
    title: 'UWCSSA1 UWCSSA1 UWCSSA1',
    component: <UWCSSA />,
},{
    index: 2,
    title: 'UWCSSA22 UWCSSA1 UWCSSA1 UWCSSA1 UWCSSA1',
    component: <UWCSSA />,
},{
    index: 3,
    title: 'UWCSSA333',
    component: <UWCSSA />,
},{
    index: 4,
    title: 'UWCSSA444',
    component: <UWCSSA />,
},{
    index: 5,
    title: 'UWCSSA555',
    component: <UWCSSA />,
},{
    index: 6,
    title: 'UWCSSA666',
    component: <UWCSSA />,
},{
    index: 7,
    title: 'UWCSSA77',
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
                        '@media screen and (max-width: 1000px)': {
                            width:'85%'
                        },
                    }}
                >
                    <Button
                        sx={{
                            width: '100px'
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
                   
                    <ProjectSwitch
                        currentIndex={currentIndex}
                        handleSelectProject={handleSelectProject}
                    />
                    <Button
                        sx={{
                            width: '100px'
                        }}
                        onClick={() =>
                            setCurrentIndex((prev) => (prev + 1) % projectList.length)}
                    >
                        <ArrowForwardIcon />
                    </Button>
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