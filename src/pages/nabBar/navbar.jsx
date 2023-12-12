import '../header/header.css';
import { Link } from 'react-router-dom';
import { nav } from '../../data/Data';
import logo from '../../imgs/logo.png';

export const NavBar = () => {
    return (
        <>
<div className="container-fluid p-0">

{/* START HEADER */}

<nav className="navbar navbar-expand-lg p-0">
    <div id='container-header' className="container-fluid pb-3 px-0">
            <Link to='/' className="navbar-brand"><img src={logo} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars text-light"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <div> 
        <ul className='d-flex m-0 p-0'>
            {nav.map((item,index) => (
                <li key={index} className='nav-link m-1' id={item.c}>
                    <Link to={item.path} className='nav-link'>{item.text}</Link>
                </li>
            ))}
        </ul>
        </div>
        </div>
        </div>
    
    <div className="btns d-flex fw-500">
        <p className='my-list me-3 mb-0 '><span className='span-success p-2 text-light d-inline-block text-center'>2</span> My List</p>
        <Link to='/login' target='_blank'><button className=' btn btn-success btn-head border-0 text-light fst-normal py-1 px-4'><i className="fa-solid fa-right-from-bracket pe-1"></i> Sign In</button></Link>
    </div>            
    </div>
</nav>

</div>
        </>
    );
};