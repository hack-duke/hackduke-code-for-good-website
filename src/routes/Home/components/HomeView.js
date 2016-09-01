import React from 'react'
// import classes from './HomeView.scss'
import Hero from 'components/Hero'
import TracksPage from 'components/TracksPage'
import About from 'components/About'

export const HomeView = () => (
  <div>
    <Hero />
    <About />
    <TracksPage />
  </div>
)

export default HomeView
