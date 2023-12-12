import { Title } from '../title/title';
import './contacts.css';
import imgTitle from '../../imgs/pricing.jpg';
import { Footer } from '../../pages/home/footer/footer';
import { NavBar } from '../../pages/nabBar/navbar';

export const Contacts = () => {
    return (
        <>
        <NavBar />
        
        <Title imgTitle={imgTitle} description='Contact Us' title='Get Helps & Friendly Support'/>
        <div className="container">
            <div className='content shadow p-3 mb-5 bg-body rounded'>
                <h3>Fillup The Form</h3>
                <div className="row">
                    <div className='col-lg-6 col-12'>
                    <input className='form-control' type="text" placeholder='Name' id='name' />
                    </div>
                    <div className='col-lg-6 col-12'>
                    <input className='form-control' type="email" placeholder='Email' />
                    </div>
                    <div className="col-12">
                        <input type="text" className='form-control' placeholder='Subject' />
                    </div>
                    <div className="col-12">
                        <textarea type="text" className='form-control' cols={30} rows={8} />
                    </div>
                    <div>
                    <button className='btn btn-success p-3 my-3' style={{fontSize: '15px'}}>Submit Request</button>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        </>
    );
}