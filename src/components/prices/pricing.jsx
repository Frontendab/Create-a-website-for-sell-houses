import Heading from '../../pages/heading/heading';
import './pricing.css';
import '../listHouses/cards.css';
import { list, price } from '../../data/Data';

export const Prices = () => {
    return (
        <>
        <Heading title='Select Your Package' discription='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores'
        smallTitleDisplay='none' pd='320'/>
        <div className='main-prices container-fluid pb-3 px-0'>
            {price.map((v,i) => (
                <div key={i} className={`boxPrice d${i} shadow p-3 mb-5 bg-body rounded`}>
                    <div className='text-center'>
                        <h6 className='d-grid text-light'><p id={`p${1}`}>{v.best}</p></h6>
                        <h5>{v.plan}</h5>
                        <h2>{`$${v.price}`}</h2>
                        <h5 id='h5'>{v.ptext}</h5>
                    </div>
                    <ul style={{listStyle: 'none', padding: '0'}}>
                        {<li>{v.list.map((v,i) => (
                        <div key={i} className='d-flex py-3'>
                            {v.change ?
                            <label className='me-4 noCheck text-center'>{v.icon}</label> :
                            <label className='me-4 isCheck text-center'>{v.icon}</label>}
                            <p>{v.text}</p>
                        </div>
                        ))}</li>}
                        <div className='buyBtn text-center mt-4'>
                            {v.plan == "Standard" ? 
                            <button className='py-4 px-5 border-0' style={{background: '#27ae60', color: '#fff'}}>Start {v.plan}</button> :  <button className='py-4 px-5' style={{background: '#fff',color: '#27ae60'}}>Start {v.plan}</button> }
                        </div>
                    </ul>
                </div>
            ))}
        </div>
        </>
    );
}

