import logo from '../../../imgs/logo-light.png';
import { footer } from "../../../data/Data";
import './footer.css';
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <>
    <div className="main" style={{background :'#27ae60'}}>
    <div className="child container px-lg-0 px-md-0" style={{padding: '12px 35px'}}>
    <div className="row">
    <div className="text-light px-0 col-lg-6 col-12 py-4">
        <h1 className="mb-0">Do You Have Questions ?</h1>
        <h5 className="mb-0 mt-3">We'll help you to grow your career and growth.</h5>
    </div>
        <div className='buyBtn col-lg-6 col-12 py-4'>
            <Link to='/contact'><button className='py-4 px-5' style={{background: '#fff', color: '#27ae60', width: '100%'}}>Contact Us Today</button></Link>
        </div>
    </div>
    </div>
    </div>

    <footer className="bg-dark py-2">
        <div className="container py-5">
            <div className="row" style={{width: '100%', margin: '0'}}>
                <div className="col-lg-6 col-12 text-light">
                    <Link to='/'><img src={logo} width={200} alt="logo" /></Link>
                    <h3 className="my-3">Do You Need Help With Anything?</h3>
                    <p className="text-secondary">Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                    <form className="d-flex">
                        <input className="form-control py-2" type="email" style={{width: '90%'}} placeholder="Email Address" />
                        <input className="btn btn-success ms-2" type="submit" />
                    </form>
                </div>
                {footer.map((v,i) => (
                    <div key={i} className="col-lg-2 col-4 pt-lg-0 pt-4 text-light">
                        <h6 style={{padding: '10px 25px', paddingBottom: '0'}}>{v.title}</h6>
                        <ul style={{listStyle: 'none', padding: '10px 25px', paddingBottom: '0'}}>
                            {v.text.map((t,idx) => (
                                <li key={idx}>{t.list}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <hr className="text-secondary"/>
        <div className="text-center py-2 fw-bold" style={{fontSize: "18px"}}>
        <p className="text-secondary">&copy; 2023 RentUP. Designd By Ayoub Sadouri.</p>
        </div>
    </footer>

        </>
    );
};