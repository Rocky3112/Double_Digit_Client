import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;