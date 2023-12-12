import React, { useState } from 'react';
import './header.css';


export default function Header () { 
    const [location, setLocation] = useState('Location');
    const [propertyType, setPropertyType] = useState('Property Type');
    const [priceRange, setPriceRange] = useState('Price Range');


    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    const handlePropertyType = (e) => {
        setPropertyType(e.target.value)
    }
    const handlePriceRange = (e) => {
        setPriceRange(e.target.value)
    }

    return (
        <>
        <div className="container-fluid p-0">
        {/* START CONTENT */}

        <div className="content" style={{width: '100%', height: '100vh'}}>
            <div className='title-Home text-center text-light pb-md-3 pb-lg-0'>
                <h1>Search Your Next Home</h1>
                <p>Find new & featured property located in your local city.</p>
            </div>
            <br />
            <div className="BOXS">
                <div className="container-fluid">
                <div className="row">
                <div className='col-lg-3 col-12'>
                    <p className='mb-1 text-secondary'>City/Street</p>
                    <input type="text" onChange={handleLocation} value={location}/>
                </div>
                <div className='col-lg-3 col-12'>
                    <p className='mb-1 text-secondary'>Property Type</p>
                    <input type="text" onChange={handlePropertyType} value={propertyType} />
                </div>
                <div className='col-lg-3 col-12'>
                    <p className='mb-1 text-secondary'>Price Range</p>
                    <input type="text" onChange={handlePriceRange} value={priceRange}/>
                </div>
                <div className='col-lg-2 col-12'>
                    <h5 className='mb-3'>Advance Filter</h5>
                </div>
                <div className='col-lg-1 col-12'>
                <i className="fa-solid fa-magnifying-glass mb-3"></i>
                </div>
                </div>
                </div>
            </div>

        </div>
        </div>
        </>
    );
}