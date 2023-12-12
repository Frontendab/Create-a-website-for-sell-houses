import '../../components/prices/pricing.css';
import Features from "../../components/features/features";
import Awards from "../awards/awards";
import Location from "../location/location";
import Header from "../header/header";
import { Cards } from "../../components/listHouses/cards";
import { Team } from "../team/team";
import { Prices } from "../../components/prices/pricing";
import { Footer } from './footer/footer';
import { NavBar } from '../nabBar/navbar';

const Home = () => {
    return (
        <>
        <NavBar />
        
        <Header />
        <Features />
        <Cards />
        <Awards />
        <Location />
        <Team />
        <Prices />

        <Footer />
        </>
    );
};

export default Home;