import Features from "../features/features";
import { Title } from "../title/title";
import imgTitle from '../../imgs/services.jpg';
import { Footer } from "../../pages/home/footer/footer";
import { NavBar } from "../../pages/nabBar/navbar";

export const Service = () => {
    return (
        <>
        <NavBar />

        <Title imgTitle={imgTitle} description='Services' title='Services -All Services'/>
            <Features />
            
        <Footer />
        </>
    );
};