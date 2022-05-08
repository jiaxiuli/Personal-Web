/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 16:25:24
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/App.js
 */
import Box from '@mui/material/Box';
import Home from "./views/Home/Home";
import { useRef } from "react";
import $ from 'jquery';
import CircularProgress from '@mui/material/CircularProgress';

// 取消浏览器对滚动条位置的记录
// if (window.history.scrollRestoration) {
//     window.history.scrollRestoration = 'manual';
// }
const App = () => {
    const loading = useRef();

    const handleImagesLoaded = () => {
        $(loading.current).fadeOut(800);
    }
    window.onload = handleImagesLoaded;
    return (
        <>
            <Box
                ref={loading}
                sx={{
                    position: 'fixed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: '100vw',
                    height: '100vh',
                    top: 0,
                    left: 0,
                    background: '#fff',
                    zIndex: 100
                }}
            >
                <CircularProgress
                    size={50}
                    style={{ color: '#000' }}
                />
                <div style={{
                    fontSize: '20px',
                    padding: '40px 0px',
                    color: '#000',
                    fontFamily: 'fantasy'
                }}>Resources are loading...</div>
            </Box>
            <Home />
        </>
    )
};

export default App;
