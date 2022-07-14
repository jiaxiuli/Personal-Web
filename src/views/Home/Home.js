/* eslint-disable react-hooks/exhaustive-deps */
import About from '../../components/About/About';
import Education from '../../components/Education/Education';
import WorkExp from "../../components/WorkExp/WorkExp";
import Projects from "../../components/Projects/Projects";
import Other from "../../components/Other/Other";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TopBar from "../../components/TopBar/TopBar";
import style from './Home.less';
import { useEffect, useRef, useState } from "react";
import ContactInfo from '../../components/common/ContactInfo';
import $ from 'jquery';
import i18n from 'i18next';

$.extend($.easing,  
    {  
        easeInOutQuart: function (x) {
            return x < 0.5 ?
                8 * x * x * x * x :
                1 - Math.pow( -2 * x + 2, 4 ) / 2;
        },
    }
);  

const CardContainer = styled(Box)(({theme}) => ({
    width: '100%',
    height: 'auto',
    position: 'relative',
    top: '72px',
}));

const Home = () => {
    const cardContainer = useRef();
    const [tabValue, setTabValue] = useState(0);
    const [offsetTopList, setOffsetTopList] = useState([]);
    const [contactOpen, setContactOpen] = useState(true);

    window.onresize = () => {
        getOffsetTopList();
    };
    useEffect(() => {
        getOffsetTopList();
        i18n.on('languageChanged', () => {
            getOffsetTopList();
        })
        return () => {
            window.onscroll = null;
            window.onresize = null;
        }
    }, []);

    useEffect(() => {
        if (offsetTopList?.length) {
            window.onscroll = setTabsWhenScroll;
            setTabsWhenScroll();
        }
    }, [offsetTopList, offsetTopList.length]);

    const handleTabChange = (newValue) => {
        const cardList = cardContainer.current.childNodes;
        setTabValue(newValue);
        if (cardList) {
            window.onscroll = checkContactInfoOpen;
            $('html, body').stop().animate(
                {
                    scrollTop: !newValue ? 0 : $(cardList[newValue]).offset().top - 72
                },
                1000,
                'easeInOutQuart',
                () => window.onscroll = setTabsWhenScroll
            );
        }
    }

    const setTabsWhenScroll = () => {
        const scrollTop = $('html, body').scrollTop();
        checkContactInfoOpen();
        offsetTopList.reduce((current, next, index) => {
            if (scrollTop >= current && scrollTop < next) {
                setTabValue(index);
            }
            return next;
        }, 0);
    }

    const getOffsetTopList = () => {
        const cardList = cardContainer.current.childNodes;
        const offsetTops = [];
        for (let i = 1 ; i < cardList.length ; i++) {
            offsetTops.push($(cardList[i]).offset().top - (window.innerHeight / 2));
        }
        offsetTops.push(Number.POSITIVE_INFINITY);
        setOffsetTopList(offsetTops);
    }

    const checkContactInfoOpen = () => {
        const scrollTop = $('html, body').scrollTop();
        const scrollHeight = $(document).height();
        const windowHeight = $(window).height();
        setContactOpen(scrollTop === 0 || (scrollTop + windowHeight === scrollHeight));
    }

    return (
        <div className={style.main}>
            <TopBar
                handleTabChange={handleTabChange}
                tabValue={tabValue}
            />
            <Box
                sx={{
                    "@media screen and (max-width: 900px)": {
                        display: 'none'
                    }
                }}
            >
                <ContactInfo open={contactOpen} setOpen={setContactOpen}/>
            </Box>
            
            <CardContainer ref={cardContainer}>
                <About />
                <Education />
                <WorkExp />
                <Projects />
                <Other />
            </CardContainer>
        </div>
    );
}

export default Home;