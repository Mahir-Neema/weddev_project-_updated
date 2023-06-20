import React from 'react'
import SessionTimeline from './SessionTimeline/SessionTimeline'
import Team from './Team/Team'
import Whyjoinourclass from './Whyjoinourclass/Whyjoinourclass'
import Container1 from '../Container1/Container1'
import AboutTrainer from './AboutTrainer/AboutTrainer'
import Footer from './Footer/Footer'

function Trainer() {
  return (
    <div>Trainer
        <Container1/>
        <AboutTrainer/>
        <Whyjoinourclass/>
        <SessionTimeline/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Trainer