import React from 'react'
import './Partners.css'
import { PartnersImages } from './Partners_image'

function Partners() {
  return (
    <section className="partners_sect">
        <div className="partners_section_heading">Partners section</div>
        <div className="partners_images">
            {PartnersImages.map((items,index)=>{
                return <img src={items.url} alt={items.des} className="partner_img"/>
            })}
        </div>
    </section>
  )
}

export default Partners