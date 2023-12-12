import { Title } from "../title/title"
import imgTitle from '../../imgs/about.jpg';
import { Cards } from "../listHouses/cards";
import { Footer } from "../../pages/home/footer/footer";
import { NavBar } from "../../pages/nabBar/navbar";


export const Blog = () => {
    return (
        <>
        <NavBar />
        <Title imgTitle={imgTitle} description='Blog' title='Blog Grid - Our Blogs'/>
            <Cards />

        <Footer />
        </>
    );
}