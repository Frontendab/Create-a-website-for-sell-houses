import { awards } from '../../data/Data';
import Heading from '../heading/heading';
import './awards.css';

const Awards = () => {
    return (
        <div className="awards">
            <div className="container">
                <Heading smallTitle='Our awards' smallTitleDisplay='block' 
                title='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' titleColor='white' pd='230'/>
                <div className="row py-5" style={{width: '100%'}}>
                    {awards.map((v,i) => (
                        <div key={i} className='col-lg-3 col-md-6 col-sm-12 py-3 py-lg-0 text-center text-light'>
                            {v.icon}
                            <h2>{v.num}</h2>
                            <p className='text-secondary'>{v.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Awards;