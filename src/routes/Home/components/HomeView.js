import React from 'react'
// import classes from './HomeView.scss'
import HeroPage from 'components/HeroPage'
import TracksPage from 'components/TracksPage'
import About from 'components/About'
import FAQ from 'components/FAQ'
import SponsorsPage from 'components/SponsorsPage'
import Social from 'components/Social'

export const HomeView = () => (
  <div>
    <HeroPage />
    <div id={'about'} style={{'transform': 'translateY(-50px)'}}></div>
    <About />
    <div id={'tracks'} style={{'transform': 'translateY(-50px)'}}></div>
    <TracksPage />
    <div id={'faq'} style={{'transform': 'translateY(-50px)'}}> </div>
    <FAQ />
    <div id={'sponsors'} style={{'transform': 'translateY(-50px)'}}> </div>
    <SponsorsPage />
    <Social />
  </div>
)

export default HomeView
