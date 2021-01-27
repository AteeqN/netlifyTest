import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  
  const fB = <FontAwesomeIcon icon='facebook-square' size="2x" />
  const tW = <FontAwesomeIcon icon={'twitter'} size="2x" />
  const Ig = <FontAwesomeIcon icon={'instagram'} size="2x" />
  const gH = <FontAwesomeIcon icon={'github'} size="2x" />
  return (
    <div> 
      <Container fluid className={styles.container} >
        <Row>
          <Col>
            <Container className={styles.containerInner}>
              <Row>
                <Col xs={6}> 
                  <Row>
                    <Col> ACCUMSAN MONTES VIVERRA </Col>
                  </Row>

                  <Row>
                    <Col> 
                      Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.
                    </Col>
                  </Row>

                </Col>
                <Col xs={3}> 
                  <Row>
                    <Col> SEM TURPIS AMET SEMPER </Col>
                  </Row>

                  <Row>
                    <Col> 
                      Dolor pulvinar sed etiam. <hr />
                    </Col>
                  </Row>
                  <Row>
                    <Col> 
                      Etiam vel lorem sed amet. <hr />
                    </Col>
                  </Row>
                  <Row>
                    <Col> 
                      Felis enim feugiat viverra. <hr />
                    </Col>
                  </Row>
                  <Row>
                    <Col> 
                      Dolor pulvinar magna etiam. <hr />
                    </Col>
                  </Row>
                </Col>
                <Col xs={3}> 
                  <Row>
                    <Col> MAGNA SED IPSUM </Col>
                  </Row>
                  <Row>
                    <Col> 
                      {fB}
                    </Col>
                    <Col> 
                    Twitter
                    </Col>
                  </Row>
                  <Row>
                    <Col> 
                    Facebook
                    </Col>
                  </Row>
                  <Row>
                    <Col> 
                    Instagram
                    </Col>
                  </Row>
                  <Row>
                    <Col> 
                    Github
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row>
                <Col> © Untitled. Photos Unsplash, Video Coverr. </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
