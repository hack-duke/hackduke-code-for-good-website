import React from 'react'
import classes from './SponsorsItem.scss'

const determineSize = (size) => {
  switch (size) {
    case 3:
      return {'maxWidth': '225px', 'maxHeight': '150px'}
    case 2:
      return {'maxWidth': '150px'}
    case 1:
      return {'maxWidth': '100px'}
    default:
      return {'maxWidth': '100px'}
  }
}

export const SponsorsItem = (props) => (
  <div>
    <div className={classes.imageBox}>
      <a href={props.sponsorUrl}>
        <img className={classes.image} style={determineSize(props.size)}
          src={props.imageUrl} />
      </a>
    </div>
  </div>
)

SponsorsItem.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  sponsorUrl: React.PropTypes.string.isRequired,
  size: React.PropTypes.number.isRequired
}

export default SponsorsItem
