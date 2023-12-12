import { Prices } from "../prices/pricing";
import { Title } from "../title/title";
import imgTitle from '../../imgs/pricing.jpg';
import { Footer } from "../../pages/home/footer/footer";
import { NavBar } from "../../pages/nabBar/navbar";


export const PricesHead = () => {
    return (
        <>
        <NavBar />
        <Title imgTitle={imgTitle} description='30 days money back guarantee' title='No Extra Fees. Friendly Support'/>
            <Prices />
            <Footer />
        </>
    );
}