import React from 'react'
import TracksBox from 'components/TracksBox'
import {Grid, Row, Col} from 'react-bootstrap'
import classes from './TracksGrid.scss'

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.',
'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.',
'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.']

export const TracksGrid = () => (
  <div>
    <Grid className={classes.grid}>
      <Row className='show-grid'>
        <Col sm={6} md={6} className={classes.leftColumn}>
          <div className={classes.leftTracksBox}>
            <TracksBox track={'INEQUALITY'}
              link={'http://hackduke.tumblr.com/tagged/inequality'}
              text={dummySentences.slice(0, 6).join(' ')} />
          </div>
          <div className={classes.leftTracksBox}>
            <TracksBox track={"HEALTH & WELLNESS"}
              link={'http://hackduke.tumblr.com/tagged/health-&-wellness'}
              text={dummySentences.slice(0, 4).join(' ')} />
          </div>
        </Col>
        <Col sm={6} md={6} className={classes.rightColumn}>
          <div className={classes.rightTracksBox}>
            <TracksBox track={"ENERGY & ENVIRONMENT"}
              link={'http://hackduke.tumblr.com/tagged/energy-&-environment'}
              text={dummySentences.slice(0, 4).join(' ')} />
          </div>
          <div className={classes.rightTracksBox}>
            <TracksBox track={"EDUCATION"}
              link={'http://hackduke.tumblr.com/tagged/education'}
              text={dummySentences.slice(0, 6).join(' ')} />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TracksGrid
