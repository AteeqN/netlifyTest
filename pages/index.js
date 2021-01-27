import NavBr from '../components/nav'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import sliderImage from '../public/images/slide-convert.jpg'
import sliderImage1 from '../public/images/slide-convert1.jpg'
import sliderImage2 from '../public/images/slide-convert2.jpg'
import Carousel from 'react-bootstrap/Carousel'
import styles from '../styles/HomeNew.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faIdCard, faSave,faCopy, faChartLine, faCode, faShare, faPaperPlane, faQrcode } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  // console.log("working")
  const idCard = <FontAwesomeIcon icon={faIdCard} size="2x" />
  const copyFile = <FontAwesomeIcon icon={faCopy} size="2x" />
  const fileSave = <FontAwesomeIcon icon={faSave} size="2x" />
  const chartLine = <FontAwesomeIcon icon={faChartLine} size="2x" />
  const paperPlane = <FontAwesomeIcon icon={faPaperPlane} size="2x" />
  const qrCode = <FontAwesomeIcon icon={faQrcode} size="2x" />

  return (
    <div>
      <NavBr />
      {/* Banner */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderImage}  
            alt="First slide"
            width=""
            height=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderImage1}
            alt="Third slide"
            width=""
            height=""
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderImage2}
            alt="Third slide"
            width=""
            height=""
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Hightlights */}
      <Container fluid>
        <Row>
          <Col>
            <Container className={styles.highlightPortion}>
                <Row>
                  <Col>
                      <h2> SEM TURPIS AMET SEMPER </h2>
                  </Col>
                </Row>
                <Row className={styles.hightlightText}>
                  <Col>
                      <p> In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</p>
                  </Col>
                </Row>
                <Row>
                  <Col className={styles.box} >
                    <Row> 
                      <Col className={styles.innerBox}>
                        <Row>
                          <Col>{idCard}</Col>
                        </Row>
                        <Row>
                          <Col> <h5>FEUGIAT CONSEQUAT</h5></Col>
                        </Row>
                        <Row>
                          <Col> <p>Nunc lacinia</p></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className={styles.box}>
                    <Row> 
                      <Col className={styles.innerBox}>
                        <Row>
                          <Col>{copyFile}</Col>
                        </Row>
                        <Row>
                          <Col> <h5>FEUGIAT CONSEQUAT</h5></Col>
                        </Row>
                        <Row>
                          <Col> <p>Nunc lacinia</p></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className={styles.box} >
                    <Row> 
                      <Col className={styles.innerBox}>
                        <Row>
                          <Col>{fileSave}</Col>
                        </Row>
                        <Row>
                          <Col> <h5>FEUGIAT CONSEQUAT</h5></Col>
                        </Row>
                        <Row>
                          <Col> <p>Nunc lacinia</p></Col>
                        </Row>  
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col className={styles.box} >
                    <Row> 
                      <Col className={styles.innerBox}> 
                        <Row>
                          <Col>{chartLine}</Col>
                        </Row>
                        <Row>
                          <Col> <h5>FEUGIAT CONSEQUAT</h5></Col>
                        </Row>
                        <Row>
                          <Col> <p>Nunc lacinia</p></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className={styles.box}>
                    <Row> 
                      <Col className={styles.innerBox}> 
                        <Row>
                          <Col>{paperPlane}</Col>
                        </Row>
                        <Row>
                          <Col> <h5>FEUGIAT CONSEQUAT</h5></Col>
                        </Row>
                        <Row>
                          <Col> <p>Nunc lacinia</p></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className={styles.box} >
                    <Row> 
                      <Col className={styles.innerBox}>
                        <Row>
                          <Col>{qrCode}</Col>
                        </Row>
                        <Row>
                          <Col> <h5>FEUGIAT CONSEQUAT</h5></Col>
                        </Row>
                        <Row>
                          <Col> <p>Nunc lacinia</p></Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
            </Container>
            
            {/* CTA */}
            <Container fluid>
              <Row>
                <Col className={styles.ctabox}>
                    <Container>
                      <Row>
                        <Col className={styles.ctaboxHeading}>
                          <h1> CURABITUR ULLAMCORPER ULTRICIES </h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col className={styles.ctaboxDescription}>
                          <p> 
                            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.
                          </p>
                        </Col>
                      </Row>
                    </Container>
                </Col>
              </Row>
            </Container>

            {/*  Testimonials */}

            <Container fluid>
              <Row>
                <Col className={styles.testimonialbox}>
                  <Container>
                    <Row>
                      <Col>
                        <Row>
                          <Col className={styles.testimonialboxheading}> 
                            <h1> FAUCIBUS CONSEQUAT LOREM </h1>
                          </Col>
                        </Row>
                        <Row>
                          <Col className={styles.testimonialboxdescription}>
                            <p> In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className={styles.box} >
                            <Row> 
                              <Col className={styles.innerBox}> 4 </Col>
                            </Row>
                          </Col>
                          <Col className={styles.box}>
                            <Row> 
                              <Col className={styles.innerBox}> 5 </Col>
                            </Row>
                          </Col>
                          <Col className={styles.box} >
                            <Row> 
                              <Col className={styles.innerBox}> 6 </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
