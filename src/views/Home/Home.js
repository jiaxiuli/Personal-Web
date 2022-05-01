import Card from "../../components/Card/Card";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TopBar from "../../components/TopBar/TopBar";
import style from './Home.less';
import { useEffect, useRef, useState } from "react";
import $ from 'jquery';

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
    height: '100%'
}));

const Home = () => {

    const cardContainer = useRef();
    const [tabValue, setTabValue] = useState(0);
    const [offsetTopList, setOffsetTopList] = useState([]);

    useEffect(() => {
        const cardList = cardContainer.current.childNodes;
        const offsetTops = [];
        for (let i = 1 ; i < cardList.length ; i++) {
            offsetTops.push($(cardList[i]).offset().top - (window.innerHeight / 2));
        }
        offsetTops.push(Number.POSITIVE_INFINITY);
        setOffsetTopList(() => offsetTops);

        return () => {
            window.onscroll = null;
        }
    }, []);

    useEffect(() => {
        if (offsetTopList) {
            window.onscroll = setTabsWhenScroll;
            setTabsWhenScroll();
        }
    }, [offsetTopList]);


    const handleTabChange = (newValue) => {
        const cardList = cardContainer.current.childNodes;
        setTabValue(newValue);
        if (cardList) {
            window.onscroll = null;
            $('html, body').stop().animate(
                {
                    scrollTop: !newValue ? 0 : $(cardList[newValue]).offset().top - 84
                },
                1000,
                'easeInOutQuart',
                () => window.onscroll = setTabsWhenScroll
            );
        }
    }

    const setTabsWhenScroll = () => {
        const scrollTop = $('html, body').scrollTop();
        offsetTopList.reduce((current, next, index) => {
            if (scrollTop >= current && scrollTop < next) {
                setTabValue(index);
            }
            return next;
        }, 0);
    }

    return (
        <div className={style.main}>
            <TopBar handleTabChange={handleTabChange} tabValue={tabValue}/>
            <CardContainer ref={cardContainer}>
                <Card background={"gray"} isFirst={true}/>
                <Card background={"rgb(45, 23, 0)"}/>
                <Card background={"rgba(0, 0, 0, 0.7)"}/>
                <Card />
            </CardContainer>
        </div>
    );
}

export default Home;