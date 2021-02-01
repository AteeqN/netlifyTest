import { Container, Row, Col, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';
import styles from '../styles/News.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBr from '../components/nav'
import Footer from '../components/footer'
import Link from 'next/link'

function News({ data }) {
    // console.log(data.results[0].multimedia[0].url)
    // console.log(data)
    return ([
        <NavBr />,
        <Container>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col> <h1> News Wire </h1> <hr /></Col>
                            <Col xs={9}>
                                <p>
                                    Times Wire is a continuous stream of the latest articles published on NYTimes.com. <br /> 
                                    <a href="#"> 
                                        Subscribe to Times Wire Feed
                                    </a>
                                </p>
                                <hr />
                            </Col>
                        </Row>
                    </Container>

                    {data.results.map((nfeed) => (
                        <Container>
                            <Row>
                                <Col> {nfeed.created_date} </Col>
                                <Col xs={6}> 
                                    <Row>
                                        <Col><Link href={nfeed.url}><a><strong>{nfeed.title}</strong></a></Link></Col>
                                    </Row>
                                    <Row>
                                        <Col>{nfeed.abstract}</Col>
                                    </Row>
                                </Col>
                                <Col> 
                                    <a href={nfeed.url}><img src={nfeed.thumbnail_standard} alt='image' width='200' height='160' /></a>
                                </Col>
                            </Row>
                            <hr />
                        </Container>
                    ))}
                    <Container >
                        <Row>
                            <Col className={styles.buttonContainer}>
                                {/* <Container>
                                    <Row>
                                        <Col>
                                            data={newsToShow}
                                        </Col>
                                    </Row>
                                </Container> */}
                                <Button> Load More </Button> 
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>,
        <Footer />
    ])
}
// export async function getStaticProps() {
//     const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=3jxlrOePjuldv4KmuADG7CAb9VY222bX`);
//     const data = await res.json();
//     // console.log(data)
//     return{
//         props: {
//             data,
//         },
//         //revalidate: 60 // seconds
//     }
// }

// This gets called on every request
export async function getServerSideProps() {
    // console.log(data)
    // Fetch data from external API
    const res = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=3jxlrOePjuldv4KmuADG7CAb9VY222bX`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default News