import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer_container'>
        <div className="footer_wrap_conatiner">
            <div className="logo_img_footer"><img src="https://uploads-ssl.webflow.com/6470f486d88df1dd87238a7e/6470f5234d227457690f99ea_logo.png" alt="profileimg" /></div>
            <div className="footer_aboutus">
                <div className="footer_title">About Us</div>
                <div className="footer_text">Benifits of the course</div>
                <div className="footer_text">Why Join Our Class?</div>
            </div>
            <div className="footer_contactus">
                <div className="footer_title">Contact Us</div>
                <div className="footer_text">+91 8872038318</div>
                <div className="footer_text">205 GM Reddy's Royale Bangelore</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer