import React, { Component } from 'react'
import Navbar1 from './navbar.component';
import { Container, Row, Col, Button } from 'reactstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from '../actions/authActions'
import Footer from './footer.component';
class Error extends Component {   
    onLogout = (e) => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
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
                                        Hey mate, it looks like you've already attempted the test.
                                    </h1>
                                    <p className="lead text-white">
                                        We will be reaching out to you as soon as the evaluation is done.


                                </p>
                                    <Button
                                        className="my-4"
                                        type="submit"
                                        onClick={this.onLogout}
                                    >
                                        Log Out
                                </Button>


                                </Col>
                            </div>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        )
    }
}
Error.propTypes = {
    logout: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(
    mapStateToProps, {logout}
)(Error)