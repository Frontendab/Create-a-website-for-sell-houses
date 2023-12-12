import Heading from '../../pages/heading/heading';
import './cards.css';
import { list } from '../../data/Data';
import imgHouse from '../../imgs/list/p-1.png';

export const Cards = () => {
    return (
        <div className='CARDS container-fluid pb-3 px-0'>
            <Heading title='Recent Property Listed' discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
            smallTitleDisplay='none' pd='230'/>
            <div id='mainCARDS'>
            {list.map((v,i) => (
            <div key={i} className='shadow p-0 mb-5 bg-body rounded'>
                <div className='img'>
                <img src={imgHouse} style={{width: '100%', height: '100%'}} className="card-img-top" alt="..." />
                </div>
                <div className="text pb-0">
                <div className="category d-flex justify-content-between px-4 pt-4" style={{width: '100%'}}>
                {v.category == 'For Rent' ? <h5 className='forRent'>{v.category}</h5> : <h5 className='noForRent'>{v.category}</h5>}
                <i className="fa-solid fa-heart text-secondary"></i>
                </div>
                <div className="red ps-4">
                <h6 id='name' className="my-2">{v.name}</h6>
                </div>
                <div className="location d-flex text-secondary ps-4">
                <i id='iconMap' className="fa-solid fa-location-dot"></i>
                <a href={v.map} target='_blank' rel='noopener noreferrer' id='name' className='text-secondary'>{v.location}</a>
                </div>
                <div className="prices d-flex justify-content-between mt-4">
                    <p className='ps-4 pt-3'><button className='btn btn-success me-2'>{v.price}</button>/sqft</p>
                    <h5 className='pe-4 pt-3 type'>{v.type}</h5>
                </div>
                </div>
            </div>
            ))}
            </div>
        </div>
    );
}