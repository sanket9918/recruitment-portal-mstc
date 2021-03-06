import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Button, Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import { logout } from '../actions/authActions'
import { Instruction } from './exam_instruction'

class CandProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgName: 'VIT Music Club',
            orgDesc: '',
            isChecked: false
            // orgImage=''
        }
    }
    fetchDesc = () => {
        this.setState({
            orgDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dignissimos nisi doloribus saepe libero reprehenderit, labore temporibus eveniet debitis eum error ipsam. Cum eligendi dolores maiores pariatur iusto ipsam sint?'
        })
    }
    // fetchOrgImage = () => {
    //     return
    // }

    onLogout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.fetchDesc();
    }
    render() {
        const { user } = this.props.auth;
        return (
            <div>
                <Navbar1 />
                <section className="section section-shaped">
                    <div className="shape shape-style-1 shape-default">
                    </div>
                    <Container className="py-md">
                        <Row className="justify-content-between align-items-center">
                            <Col className="mb-lg-auto" >
                                <div style={{ margin: "auto", textAlign: "center" }}>
                                    <h2 className="display-3 text-white">
                                        Candidate details
                                </h2>

                                    <h4 id="Name" className="text-white">{user.name}</h4>
                                    <h4 id="reg_no" className="text-white">{user.regNo}</h4>
                                    <span>You are currently appearing test for the club code : </span>
                                    <b>{user.clubCode}</b><br />

                                    <Button
                                        className="my-4"
                                        type="button"
                                        onClick={this.onLogout}
                                    >
                                        Log Out
                                </Button>




                                </div>


                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <div style={{ margin: "auto", textAlign: "center", marginTop: "5em" }}>

                                    <h2 className="display-3 text-white">
                                        Exam Instructions
                                </h2>
                                </div>
                                <div style={{ margin: "auto", textAlign: "left", maxHeight: "30em", overflow: "auto" }}>
                                    {Instruction.map((el) => (
                                        <ul>
                                            <li key={el.id}>
                                                <p className="text-white" >
                                                    {el.text}
                                                </p>
                                            </li>
                                        </ul>
                                    )

                                    )
                                    }

                                </div>
                                <Form role="form">
                                    <div style={{ marginTop: "1em", textAlign: "right" }}>
                                        <div className="">
                                            <input
                                                className="mycheckbox"
                                                id="consent"
                                                value='consent'
                                                type="checkbox"
                                                checked={this.state.isChecked}
                                                onChange={() => {
                                                    this.setState({
                                                        isChecked: !this.state.isChecked
                                                    })
                                                }}
                                            />
                                            <label
                                                htmlFor="mycheckbox"
                                            >
                                                <span className="text-white">I agree to exam rules and conditions.</span>

                                            </label>

                                        </div>
                                        <Link to='/exam'>
                                            {this.state.isChecked ? <Button
                                                className="my-4"
                                                type="button"
                                            >
                                                Proceed
                                    </Button> :
                                                <Button
                                                    className="my-4"
                                                    type="button"
                                                    disabled
                                                >
                                                    Proceed
                                    </Button>}

                                        </Link>

                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Footer />

            </div>

        )
    }
}
CandProfile.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps, { logout }
)(CandProfile)
