import Heading from "../../pages/heading/heading";
import '../../pages/header/header.css';
import './features.css';
import { featured } from '../../data/Data';
import imgFeatured from '../../imgs/hero/h1.png';

const Features = () => {
    return (
        <>
            <Heading title='Featured Property Types' discription='Find All Type of Property.' bg='#f8f9fa' smallTitleDisplay="none" pd='230'/>
            <div className="container-fluid my-0 pb-3 px-0 features bg-light">
                {featured.map((v,index) => (
                    <div key={index} className="text-center shadow p-3 mb-5 bg-body rounded">
                        <img src={imgFeatured} width={70} height={70} alt="" />
                        <h6>{v.name}</h6>
                        <p>{v.total}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Features;