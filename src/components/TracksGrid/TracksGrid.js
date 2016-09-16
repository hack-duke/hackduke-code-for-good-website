import React from 'react'
import TracksBox from 'components/TracksBox'
import {Grid, Row, Col} from 'react-bootstrap'
import classes from './TracksGrid.scss'

export const TracksGrid = () => (
  <div>
    <Grid className={classes.grid}>
      <Row className='show-grid'>
        <Col sm={6} md={6} className={classes.leftColumn}>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'INEQUALITY'}
              link={'http://hackduke.tumblr.com/tagged/inequality'}
              text={'The Inequality track stresses projects that bridge \
                    the gap between the affluent and poor, targeting disparities \
                    in populations. This is an important aspect of social good \
                    because it forms the backbone of ensuring that everyone has the \
                    capacity to reach his or her full potential given the resources.'} />
          </div>
          <div className={classes.leftTracksBox}>
            <TracksBox track={"HEALTH & WELLNESS"}
              link={'http://hackduke.tumblr.com/tagged/health-&-wellness'}
              text={'The Healthcare track allows hackers to work with various \
                    kinds of health related data, as well as connect with mentors \
                    from the intersection of health and technology. More than ever, \
                    technology today is in a prime position to improve the quality, \
                    efficiency, and accessibility of health care. '} />
          </div>
        </Col>
        <Col sm={6} md={6} className={classes.rightColumn}>
          <div className={classes.rightTracksBox}>
            <TracksBox track={"ENERGY & ENVIRONMENT"}
              link={'http://hackduke.tumblr.com/tagged/energy-&-environment'}
              text={'The Energy and Environment track encompasses a technical perspective to \
                    deal with large issues impacting energy use, allocation and environmental \
                    regulations. This track has many applications, including machine learning \
                    for resource extraction, the use of green energy and enforcing environmental policy.'} />
          </div>
          <div className={classes.rightTracksBox}>
            <TracksBox track={"EDUCATION"}
              link={'http://hackduke.tumblr.com/tagged/education'}
              text={'The Education track teams hackers with educators, reaching out to \
                    all levels of subjects and skills. In addition to Education events \
                    sponsored by HackDuke, projects aim to increase visibility of \
                    technology and to introduce basic skills to the public.'} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TracksGrid
