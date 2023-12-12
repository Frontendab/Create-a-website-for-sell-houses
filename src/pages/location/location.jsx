import './location.css';
import Heading from '../heading/heading';
import '../header/header.css';
import { location } from '../../data/Data';
import imgLocation from '../../imgs/location/city-1.png';

const Location = () => {
    return (
        <>
            <Heading title='Explore By Location' discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            smallTitleDisplay='none' pd='370'/> 
            <div id='location' className="container-fluid my-0 pb-3">
                    {location.map((v,i) => (
                    <div id='col-4' key={i} className="text-center p-0 text-light">
                        <h3>{v.name}</h3>
                        <img src={imgLocation} style={{width: '100%'}} alt="" />
                            <div className=' d-flex justify-content-around align-items-center'>
                                <p>{v.Villas}</p>
                                <p>{v.Offices}</p>
                                <p>{v.Apartments}</p>
                            </div>
                    </div>
                    ))}
            </div>

                        
        </>
    );
};

export default Location;