import React from 'react';
import './ContactUs.css';
function ContactUs(contact) {
    return (
        <div className='contactUS' onClick={contact.showDetails}>
            <div className='options'>
                <img className='tr_hexa' src='Image/purplehexagon.png' alt='image'></img>
                <h1>{contact.options}</h1>
            </div>
        </div>
    )
}

export default ContactUs;
