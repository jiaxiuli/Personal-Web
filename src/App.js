/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 16:25:24
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/App.js
 */
import Box from '@mui/material/Box';
import Home from "./views/Home/Home";
import OnImagesLoaded from 'react-on-images-loaded';
import { useRef, useState } from "react";
import $ from 'jquery';

// 取消浏览器对滚动条位置的记录
// if (window.history.scrollRestoration) {
//     window.history.scrollRestoration = 'manual';
// }
const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const loading = useRef();

    const handleImagesLoaded = () => {
        setIsLoading(false);
        console.log(loading.current)
        $(loading.current).fadeOut();
        console.log('loaded');
    }
    return (
        <OnImagesLoaded onLoaded={handleImagesLoaded}>
            <Box
                ref={loading}
                sx={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                    top: 0,
                    left: 0,
                    background: '#000',
                    zIndex: 100
                }}
            >
            </Box>
            <Home />
        </OnImagesLoaded>
    )
};

export default App;
