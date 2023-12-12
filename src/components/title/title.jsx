import './title.css';

export const Title = ({description,title,imgTitle}) => {
    return (
        <div className="wapperTitle" style={{backgroundImage: `url(${imgTitle})`, padding: '145px 0'}}>
            <div className='overly'></div>
            <div className='container text-light' style={{position: 'relative'}}>
                <p>{description}</p>
                <h1>{title}</h1>
            </div>
        </div>
    );
};