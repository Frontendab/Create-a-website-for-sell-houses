import Heading from '../heading/heading';
import '../header/header.css';
import './team.css';
import { team } from '../../data/Data';
import { Link } from 'react-router-dom';
import '../../components/listHouses/cards.css';
import imgTeam from '../../imgs/customer/team-1.jpg';


export const Team = () => {
    return (
        <div style={{height: 'fit-content', background: '#f7f9fc'}}>
        <Heading title='Our Featured Agents' discription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        smallTitleDisplay='none' pd='305'/>
            <div id='team' className='container-fluid my-0 pb-3'>
                {team.map((v,i) => (
                    <div key={i} className='box text-center ps-5 pe-5 py-4'>
                        <h6 className='text-start text-light'>{v.list} Listings</h6>
                        <div>
                            <div className='img-icon'>
                                <div className='img'>
                                <img src={imgTeam} alt="" />
                                <i className="fa-solid fa-circle-check text-primary"></i>
                                </div>
                            </div>
                            <div className='mt-3'>
                            <i id='iconMap' className="fa-solid fa-location-dot text-secondary pe-2"></i>
                            <Link style={{textDecoration: 'none'}} className='text-dark'>{v.address}</Link>
                            </div>
                            <div className='my-3'>
                                <h5>{v.name}</h5>
                            </div>
                            <div className='social-media d-flex justify-content-center'>
                                {v.icon.map((ic,i) => (
                                    <>
                                        <p key={i} id='Ps' className='mx-2' style={{background: '#ebe8f2',color: '#808080'}}>{ic}</p>
                                    </>
                                ))}
                            </div>
                            <div className='parent-btns d-flex justify-content-between my-4'>
                                <button className='py-3 px-3 border-0 text-light' style={{background: '#27ae60'}}><i className="fa-solid fa-envelope text-light"></i> Message</button>
                                <button className='py-3 border-0 text-light' style={{background: '#000'}}><i className="fa-solid fa-phone-flip"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};