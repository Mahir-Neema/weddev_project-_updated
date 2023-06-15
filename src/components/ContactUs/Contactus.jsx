import React from 'react'
import './Contactus.css'

function Contactus() {
  return (
    <div className="contactus_section">
        <div className="contactus_heading">Contact Us</div>
        <div className="contact_info">
            <div className="phone_no">+91 8872038318</div>
            <div className="info_button_cont">
                <button className="info_button">Book a call</button>
                <button className="info_button">Raise a Query</button>
            </div>
        </div>
    </div>
  )
}

export default Contactus