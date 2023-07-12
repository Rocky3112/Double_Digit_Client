import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featuredItem bg-fixed">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"Featured Items"}
            ></SectionTitle>

            <div className=" md:flex justify-center items-center gap-10 px-28 py-32 text-white bg-slate-700 bg-opacity-20">
                <div>
                    <img className="rounded-xl" src={featuredImg} alt="" />
                </div>
                <div>
                    <p className=" text-xl">3 July 2023</p>
                    <h3 className="uppercase py-2 text-3xl">Where can i get some ?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero natus asperiores, cumque molestiae maxime quos tenetur dolorum officiis id vel illo repellendus architecto quaerat rerum fugit deserunt sed expedita incidunt ad facilis quisquam odit consequuntur. Quae qui iusto laborum consectetur!</p>
                    <button  className="uppercase btn btn-outline my-3 border-0 border-b-2 border-white">Read More</button>
                </div>

            </div>
        </div>
    );
};

export default Featured;