import React, { Component } from 'react'
import Navbar1 from '../navbar.component';
import Footer from '../footer.component';
import Options from '../OrgManage/options.component'
import Participants from '../OrgManage/participants.component'
import Contact from '../OrgManage/contact.component'
import { Container, Col, Row, Button, Collapse } from 'reactstrap'
import { HashRouter, NavLink, Route } from 'react-router-dom'
import '../../assets/scss/org_sign.scss'


class OrgManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgName: 'VIT Music Club',
            isOpen: true
        }


    }

    resize() {
        this.setState()
    }


    render() {
        const toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
        return (
            <div>
            <Navbar1 />
            <HashRouter>
                <div>
                    

                    <section className="section section-shaped">
                        <div className="shape shape-style-1 shape-default">

                        </div>
                        <Container className="py-md">




                            <Row className="justify-content-between align-items-center">
                                <Col className="mb-lg-auto" lg="4">
                                    <div style={{ margin: "auto", textAlign: "center" }}>
                                        <span className="text-white" style={{ fontSize: "1.5rem" }}>
                                            Hi <b>{this.state.orgName}</b>
                                        </span>
                                        {/* <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{ paddingBottom: "1em", height: "10em", display: 'block' }}
                                        src={require("../../assets/img/happy.svg")}


                                    /> */}

                                        <span className="manage">Management Console</span>
                                        <div className='options-opener' onClick={toggle} >Options</div>
                                        <Collapse isOpen={this.state.isOpen}>
                                            <div className="options-holder">


                                                <NavLink exact to='/options'><div className="options" tabIndex="0">Questions</div></NavLink>
                                                <NavLink exact to='/participants'><div className="options" tabIndex="0">Participants</div></NavLink>
                                                <NavLink exact to='/contact'> <div className="options" tabIndex="0">Contact Us</div></NavLink>
                                            </div>
                                        </Collapse>

                                    </div>
                                </Col>
                                <Col className="mb-lg-auto" lg="8">
                                    <div className="placeholder">
                                        <Route exact path='/options' component={Options} />
                                        <Route path='/participants' component={Participants} />
                                        <Route path='/contact' component={Contact} />
                                    </div>

                                </Col>
                            </Row>

                        </Container>
                    </section>

                    <Footer />
                </div>
                </HashRouter>
            </div>
        )
    }
}

export default OrgManage;
