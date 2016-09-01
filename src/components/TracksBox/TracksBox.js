import React from 'react'
// import BackgroundImage from '../assets/hackduke-background.png'
import classes from './tracksbox.scss'

export const TracksBox = (props) => (
  <div>
    <div className={classes.heading}>
      <p>{props.track}</p>
    </div>
    <div className={classes.paragraph}>
      <p>{props.text}</p>
      <button>Apply Now</button>
      <div />
    </div>
  </div>
)

TracksBox.propTypes = {
  track: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}

export default TracksBox
