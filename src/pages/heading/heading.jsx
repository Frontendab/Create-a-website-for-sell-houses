import './heading.css';

const Heading = ({title, discription, bg, smallTitle, smallTitleDisplay, titleColor,pd}) => {
    return (
        <div id='heading' className='text-center' style={{background: bg, padding: `100px ${pd}px`}}>
            <p style={{display: smallTitleDisplay, color: 'green'}}>{smallTitle}</p>
            <h1 style={{color : titleColor}}>{title}</h1>
            <p>{discription}</p>
        </div>
    );
}
export default Heading;