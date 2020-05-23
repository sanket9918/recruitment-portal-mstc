import React, { Component } from 'react'
import Navbar1 from '../navbar.component';
import Footer from '../footer.component';
import Options from '../OrgManage/options.component'
import Participants from '../OrgManage/participants.component'
import Contact from '../OrgManage/contact.component'
import { Container, Col, Row, Button, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { HashRouter, NavLink, Route, Link } from 'react-router-dom'
import '../../assets/scss/org_sign.scss'
import QuestionHolder from './questions/taskForm';
import App from '../../App';


class OrgManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgName: 'VIT Music Club',
            isOpen: false
        }


    }

    resize() {
        this.setState()
    }

    onLogout() {
        console.log("Token deleted")
        localStorage.removeItem('The token')
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


                <div>


                    <section className="section section-shaped">
                        <div className="shape shape-style-1 shape-default">

                        </div>
                        <Container className="py-md">

                            <HashRouter>
                                <div>
                                    <Row className="justify-content-between align-items-center">
                                        <Col className="mb-lg-auto" lg="6">
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
                                            </div>
                                        </Col>


                                        <Col>
                                            <div className="center-tag">




                                                <UncontrolledDropdown nav>
                                                    <DropdownToggle nav>
                                                        <div className="options-opener">
                                                            <span className="nav-link-inner--text">Options</span>
                                                        </div>
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem to="/options" tag={Link}>
                                                            <NavLink exact to='/options'><div className="options" tabIndex="0">Questions</div></NavLink>
                                                        </DropdownItem>
                                                        <DropdownItem to="/participants" tag={Link}>
                                                            <NavLink exact to='/participants'><div className="options" tabIndex="0">Participants</div></NavLink>
                                                        </DropdownItem>
                                                        <DropdownItem to="/contact" tag={Link}>
                                                            <NavLink exact to='/contact'> <div className="options" tabIndex="0">Contact Us</div></NavLink>
                                                        </DropdownItem>
                                                        <Link to='/'>

                                                        </Link>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                                {/* 
                                            <Collapse isOpen={this.state.isOpen}>


                                                <div className="center-tag">
                                                    <div className="options-holder">


                                                    </div>
                                                </div>
                                            </Collapse> */}

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mb-lg-auto">
                                            <div className="placeholder">
                                                <Route path='/options' component={QuestionHolder} />
                                                <Route path='/participants' component={Participants} />
                                                <Route path='/contact' component={Contact} />

                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            </HashRouter>
                            <Row >
                                <Col>
                                    <div className="center-tag">
                                        <Link to='/'>
                                            <Button
                                                className="my-4"
                                                type="button"
                                                onClick={this.onLogout}
                                            >
                                                Log Out
                                </Button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <Footer />
                </div>


            </div>
        )
    }
}

export default OrgManage;
