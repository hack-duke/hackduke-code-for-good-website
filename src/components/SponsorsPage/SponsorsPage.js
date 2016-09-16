import React from 'react'
import classes from './SponsorsPage.scss'
import SponsorsItem from 'components/SponsorsItem'
import { Row, Col } from 'react-bootstrap'
import ibm from 'static/sponsors/ibm.png'
import google from 'static/sponsors/google.png'
import yikyak from 'static/sponsors/yik-yak.png'
import esri from 'static/sponsors/esri.png'
import capitalone from 'static/sponsors/capital-one.png'
import fb from 'static/sponsors/fb.png'
import infusion from 'static/sponsors/infusion.png'
import mbacsi from 'static/sponsors/mbasci.jpg'
import sqlsentry from 'static/sponsors/sql-sentry.jpg'
import engineyard from 'static/sponsors/engine-yard.png'
import plaid from 'static/sponsors/plaid.png'
import hackgt from 'static/sponsors/hackgt.jpg'
import cs from 'static/sponsors/cs.png'
import epic from 'static/sponsors/epic.png'
import att from 'static/sponsors/att-old.png'
import colab from 'static/sponsors/colab.png'
import cerner from 'static/sponsors/cerner.png'
import netapp from 'static/sponsors/netapp.png'
import nicholas from 'static/sponsors/nicholas-school-environment.png'
import cisco from 'static/sponsors/cisco.png'
import particle from 'static/sponsors/particle.png'

class SponsorsPage extends React.Component {

  constructor () {
    super()
    this.state = {
      sponsorsUrls: ['http://ibm.com', 'http://google.com', 'http://yikyak.com', 'http://esri.com',
      'http://capitalone.com', 'http://facebook.com', 'http://infusion.com', 'http://mbacsi.com',
      'http://sqlsentry.com', 'http://engineyard.com', 'http://plaid.com', 'http://hackgt.com',
      'http://cs.duke.edu', 'http://epic.com', 'http://att.com', 'http://colab.duke.edu',
      'http://cerner.com', 'http://netapp.com', 'https://nicholas.duke.edu', 'http://cisco.com',
      'http://particle.io'],
      windowWidth: window.innerWidth,
      imageUrls: [ibm, google, yikyak, esri, capitalone, fb, infusion, mbacsi, sqlsentry, engineyard,
      plaid, hackgt, cs, epic, att, colab, cerner, netapp, nicholas, cisco, particle],
      sizes: [3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      title: 'PAST SPONSORS',
      aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed' +
                  'do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      sponsorButtonText: 'Sponsor Us'
    }
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize (event) {
    this.setState({windowWidth: window.innerWidth})
  }

  renderSponsors () {
    let mapArray = []
    if (this.state.windowWidth < 600) {
      mapArray = [0]
    } else if (this.state.windowWidth < 1000) {
      mapArray = [0, 1]
    } else {
      mapArray = [0, 1, 2]
    }
    return (
      mapArray.map(mod => {
        return this.sponsorsColAtMod(mod, mapArray.length)
      })
    )
  }

  sponsorsColAtMod (mod, divisor) {
    return (
      <Col xs={12 / divisor} key={mod}>
        {this.state.imageUrls.map((url, index) => {
          if (index % divisor === mod) {
            return <SponsorsItem key={index}
              imageUrl={url}
              sponsorUrl={this.state.sponsorsUrls[index]}
              size={this.state.sizes[index]} />
          }
        })}
      </Col>
    )
  }

// <p className={classes.sponsorsText}>
//   {this.state.aboutText}
// </p>

  render () {
    return (
      <div>
        <div className={classes.sponsors}>
          <div>
            <h1 className={classes.header}>{this.state.title}</h1>
            <br />
            <a className={classes.link} href={'mailto:sponsorship@hackduke.org'}>
              <button className={classes.homeButton}> {this.state.sponsorButtonText} </button>
            </a>
            <div className={classes.section}>
              <div className={classes.logobox}>
                <Row>
                  {this.renderSponsors()}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SponsorsPage
