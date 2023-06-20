import React from 'react'
import './SessionTimeline.css'
import { Sessiondetails } from './SessionTimelinedetails'


function SessionTimeline() {
  return (
    <section className='SessionTimeline_container'>
        <div className='SessionTimelineHeading'>SessionTimeline</div>

        <div className="session_card_container">
            {Sessiondetails.map((items,index) => {
                return  (
                    <div className="session_card" key={index}>
                        <div className="session_card_heading">{items.heading}</div>
                        <div className="session_card_duration">Duration : {items.duration}</div>
                        <ol className="session_card_steps">
                            <li> {items.steps[0][0]}<span className='steps_italic'>{items.steps[0][1]}</span></li>
                            <li> {items.steps[1][0]}<span className='steps_italic'>{items.steps[1][1]}</span></li>
                            <li> {items.steps[2][0]}<span className='steps_italic'>{items.steps[2][1]}</span></li>
                        </ol>
                    </div>
                )
            })}

        </div>
    </section>
  )
}

export default SessionTimeline