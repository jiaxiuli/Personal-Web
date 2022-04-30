import Card from "../../components/Card/Card";
import TopBar from "../../components/TopBar/TopBar";
import style from './Home.less';

const Home = () => {

    return (
        <div className={style.main}>
            <TopBar />
            <Card background={"gray"}/>
            <Card background={"rgba(0, 0, 0, 0.2)"}/>
            <Card />
        </div>
    );
}

export default Home;