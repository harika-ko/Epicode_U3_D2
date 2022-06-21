import { Component } from "react";
import { Jumbotron, Button } from 'react-bootstrap'


class Welcome extends Component {
    render() {
        return (
            <Jumbotron style={{ backgroundColor: this.props.bgColor }}>
                <h1>Welcome to Strive Books!</h1>
                <p>
                    Find a perfect book for yourself in any genre.
                </p>
            </Jumbotron>


        )
    }
}

export default Welcome;