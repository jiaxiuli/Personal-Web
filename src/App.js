/*
 * @Author: 李佳修
 * @Date: 2022-05-07 13:22:23
 * @LastEditTime: 2022-05-07 16:07:35
 * @LastEditors: 李佳修
 * @FilePath: /Personal-Web/src/App.js
 */
import Home from "./views/Home/Home";

// 取消浏览器对滚动条位置的记录
if (window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
}
const App = () => <Home />;

export default App;
