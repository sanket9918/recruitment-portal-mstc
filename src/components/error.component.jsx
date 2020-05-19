import React, { Component } from 'react'
import Navbar1 from './navbar.component';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Navbar1 />
                <section className="section section-lg section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                    <Container className="py-md">
                        <Row className="row-grid justify-content-between align-items-center">
                            <div style={{ margin: "auto", textAlign: "center" }}>
                                <Col lg="12">
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{ paddingBottom: "1em", height: "20em" }}
                                        src={require("../assets/img/15.png")}

                                    />
                                    <h1 className="display-3 text-white">
                                        Oops, something ran wrong!
                                </h1>
                                    <p className="lead text-white">
                                        Either the page you requested is not available or you are not authorised for access.


                                </p>
                                    <Link to='/'>
                                        <Button
                                            className="my-4"
                                            type="button"
                                        >
                                            Main Page
                                </Button>
                                    </Link>


                                </Col>
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        )
    }
}

export default Error;