import React,{useState} from 'react';
import './contact.css';
import ContactUs from './ContactUs';
import Schedule from './Schedule';
function Contact() {
    const [viewDetails, setViewDetails] = useState(false);
    const Details = () => {
        setViewDetails(true);
    document.body.classList.add("disable_scroll");
}
const hideDetails = () => {
    setViewDetails(false);
    document.body.classList.remove("disable_scroll");
    }
    const options = [
        {
            id:0,
            option: 'Option 1',
        },
        {
            id:1,
            option: 'Option 2',
        },
        {
            id:2,
            option: 'Option 3',
        },
        {
            id:3,
            option: 'Option 4',
        },
    ]
    return (
        <div className='contact'>
            <div className='contact_'>
                <div className='Hexagons'>
            <img src="/Image/blackhexagon.png" alt="image" className="tr__hex" />
                <img src="/Image/whitehexagon.png" alt="image" className="b__hex" />
                <img src="/Image/whitehexagon.png" alt="image" className="tl__hex" />
            <img src="/Image/blackhexagon.png" alt="image" className="tr__hexa" />
                <img src="/Image/whitehexagon.png" alt="image" className="tl__hexa" />
                </div>
            <h2>How can you be a part of Plunge2Research community ?</h2>
            <div className='contact_options'>
                {options.map((e)=>{return <ContactUs options={e.option} showDetails={Details}/>
                })}
            </div>{viewDetails?<div id='directorInfo'><Schedule hide={hideDetails} option="Option 1"/>
                </div>:""}
            </div>
        </div>
    )
}

export default Contact
