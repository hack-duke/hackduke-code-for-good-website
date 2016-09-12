import React from 'react'
import classes from './TracksBox.scss'

export const TracksBox = (props) => (
  <div>
    <div className={classes.heading}>
      <p>{props.track}</p>
    </div>
    <div className={classes.paragraph}>
      <p>{props.text}</p>
      <a href={props.link} className={classes.link}>
        <button className={classes.moreButton}> Learn More </button>
      </a>
      <div />
    </div>
  </div>
)

TracksBox.propTypes = {
  track: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
}

export default TracksBox
