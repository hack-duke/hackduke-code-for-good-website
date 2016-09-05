import React from 'react'
// import BackgroundImage from '../assets/hackduke-background.png'
import classes from './TracksPage.scss'
import TracksGrid from 'components/tracksgrid'

export const TracksPage = () => (
  <div>
    <div className={classes.container}>
      <div className={classes.tracks}>
        <h1 className={classes.tracksHeader}>TRACKS</h1>
        <p className={classes.tracksText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <TracksGrid />
      </div>
    </div>
  </div>
)

export default TracksPage
