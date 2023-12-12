import { Title } from "../title/title";
import imgTitle from '../../imgs/about.jpg';
import imgFamily from '../../imgs/immio.jpg';
import './about.css';
import { Footer } from "../../pages/home/footer/footer";
import { NavBar } from "../../pages/nabBar/navbar";

export const About = () => {
    return (
        <>
        <NavBar />
        
            <Title  imgTitle={imgTitle} description='About Us' title={'About Us - Who We Are?'}/>
        <div className="container py-5">
            <div className="row">
            <div id="text" className="col-lg-6 col-12 pb-md-3 pb-sm-5">
            <h1 style={{color: '#2d3954', fontWeight: 'bold'}}>Our Agency Story</h1>
            <p className="text-secondary">Check out our company story and work process</p>
            <p id="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br />
            <p id="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            </div>
                <div className="col-lg-6 col-12">
                <img src={imgFamily} className="img-fluid" alt="" />
                </div>
            </div>
        </div>

        <Footer />
        </>
    );
}