import React from 'react'
import classes from './TracksPage.scss'
import TracksGrid from 'components/TracksGrid'

export const TracksPage = () => (
  <div>
    <div className={classes.container}>
      <div className={classes.tracks}>
        <h1 className={classes.tracksHeader}>TRACKS</h1>
        <p className={classes.tracksText}>
          HackDuke emphasizes its commitment to social good through four
          unique project tracks. Tracks enable members to collaborate while
          providing an alleyway to partnership with peers, local organizations,
          nonprofits and universities to continue working towards the cause.
        </p>
        <TracksGrid />
      </div>
    </div>
  </div>
)

export default TracksPage
