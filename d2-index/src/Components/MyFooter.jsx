import { Component } from "react";
import { Card, CardGroup } from 'react-bootstrap';

class MyFooter extends Component {
    render() {
        return (
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>About Us</Card.Title>
                        <a href="#">Books</a><br></br>
                        <a href="#">Authors</a>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Useful Links</Card.Title>
                        <a href="#">Link 1</a><br></br>
                        <a href="#">Link 2</a>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Contact Us</Card.Title>
                        <a href="#">Email</a><br></br>
                        <a href="#">Phone</a>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        )
    }
}

export default MyFooter;