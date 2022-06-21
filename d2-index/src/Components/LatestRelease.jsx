import { Component } from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap"
import booksArray from "../Data/fantasy.json"
import historyArray from "../Data/history.json"
import horrorArray from "../Data/horror.json"
import romanceArray from "../Data/romance.json"
import scifiArray from "../Data/scifi.json"


export default class LastestRelease extends Component {
    render() {
        return (

            <Container>
                <Row>
                    {booksArray.slice(0, 20).map(book => (
                        <Col key={book.asin} xs={6} md={4} lg={3} className="d-flex">
                            <Card>
                                <Card.Img variant="top" src={book.img} style={{ height: "220px", objectFit: "cover", width: "auto" }} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))
                    }
                </Row>
            </Container>
            /*<Container>
                <h4 className="text-center mb-3">Explore Fantasy Books Here</h4>
                <Row className="justify-content-center">
                    <Col xs={6} md={4} lg={3}>
                        <Carousel>
                            {booksArray.map(book => (
                                <Carousel.Item key={book.asin}>
                                    <img className="w-100"
                                        src={book.img} style={{ height: "300px", width: "500px" }} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
                            </Container>*/
        )
    }
}


class LastestRelease1 extends Component {
    render() {
        return (
            <Container>
                <h4 className="text-center mb-3 mt-5">Explore History Books Here</h4>
                <Row className="justify-content-center">
                    <Col xs={6} md={4} lg={3}>
                        <Carousel>
                            {historyArray.map(book => (
                                <Carousel.Item key={book.asin}>
                                    <img className="w-100"
                                        src={book.img} style={{ height: "300px", width: "700px" }} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>


        )
    }
}




class LastestRelease2 extends Component {
    render() {
        return (
            <Container>
                <h4 className="text-center mb-3 mt-5">Explore Horror Books Here</h4>
                <Row className="justify-content-center">
                    <Col xs={6} md={4} lg={3}>
                        <Carousel>
                            {horrorArray.map(book => (
                                <Carousel.Item key={book.asin}>
                                    <img className="w-100"
                                        src={book.img} style={{ height: "300px", width: "700px" }} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>


        )
    }
}



class LastestRelease3 extends Component {
    render() {
        return (
            <Container>
                <h4 className="text-center mb-3 mt-5">Explore Romantic Books Here</h4>
                <Row className="justify-content-center mb-5">
                    <Col xs={6} md={4} lg={3}>
                        <Carousel>
                            {romanceArray.map(book => (
                                <Carousel.Item key={book.asin}>
                                    <img className="w-100"
                                        src={book.img} style={{ height: "300px", width: "700px" }} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}



class LastestRelease4 extends Component {
    render() {
        return (
            <Container>
                <h4 className="text-center mb-3 mt-5">Explore Scifi Books Here</h4>
                <Row className="justify-content-center mb-5">
                    <Col xs={6} md={4} lg={3}>
                        <Carousel>
                            {scifiArray.map(book => (
                                <Carousel.Item key={book.asin}>
                                    <img className="w-100"
                                        src={book.img} style={{ height: "300px", width: "700px" }} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}




export {
    LastestRelease1,
    LastestRelease2,
    LastestRelease3,
    LastestRelease4
};




