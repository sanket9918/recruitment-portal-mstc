import React, { Component } from 'react'
import Navbar1 from '../navbar.component';
import Footer from '../footer.component';
import Participants from '../OrgManage/participants.component'
import Contact from '../OrgManage/contact.component'
import { Container, Col, Row, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { HashRouter, NavLink, Route, Link } from 'react-router-dom'
import '../../assets/scss/org_sign.scss'
import QuestionHolder from './questions/containers/main'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout} from '../../actions/authActions'
class OrgManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgName: 'VIT Music Club',
            isOpen: false
        }


    }
    onLogout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
    }

    resize() {
        this.setState()
    }

   
    render() {
        
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
                                                    {/* Hi <b>{org.clubName}</b> */}
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
                                                <div className="center-tag">
                                                    <span style={{ fontSize: "1.2em" }}>Welcome to management console</span><br /><br />

                                                </div>
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
                                        <a href="localhost:3000">
                                            <Button
                                                className="my-4"
                                                type="button"
                                                onClick={this.onLogout}
                                               
                                            >
                                                Log Out
                                </Button>
                                        </a>
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

OrgManage.propTypes = {
    auth: PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(
    mapStateToProps,{logout}
)(OrgManage)
