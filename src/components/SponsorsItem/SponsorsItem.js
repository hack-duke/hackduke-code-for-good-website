import React from 'react'
import classes from './SponsorsItem.scss'

/*
* props to pass in:
* @param {string} imageAltText (text to display if image not found)
* @param {string} imageName (name of logo to display)
* @param {string} sponsorUrl (link to website of sponsor)
*/

export const SponsorsItem = (props) => (
  <div>
    <div>
      <img className={classes.imageBox}
        src={props.imageUrl} />
    </div>
  </div>
)

SponsorsItem.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  sponsorUrl: React.PropTypes.string.isRequired
}

export default SponsorsItem
