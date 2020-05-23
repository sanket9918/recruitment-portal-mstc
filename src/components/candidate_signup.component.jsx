import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import classnames from 'classnames'
import { Col, Row, Container, Button, FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap'
import { Link } from 'react-router-dom'

class UserSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameFocused: '',
            emailFocused: '',
            block: '',
            phone: '',
            cl_code: '',
            password: '',
            confirm_password: '',
            regno:''

        }
    }
    render() {
        return (
            <div>

                <Navbar1 />
                <section className="section section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                    <Container className="py-md">
                        <Row className="justify-content-between align-items-center">
                            <Col className="mb-lg-auto" lg="6">
                                <div style={{ margin: 'auto', textAlign: 'center' }}></div>
                                <h2 className="display-3 text-white">
                                    Hey let's know about you
                                </h2>


                                {/* The start of the form  */}
                                <form>
                                    <FormGroup
                                        className={classnames("mt-5", {
                                            focused: this.state.nameFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-user-run" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="name"
                                                placeholder="What's your name?"
                                                type="text"
                                                name="name"
                                                onFocus={e => this.setState({ nameFocused: true })}
                                                onBlur={e => this.setState({ nameFocused: false })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup
                                        className={classnames({
                                            focused: this.state.emailFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="regno"
                                                placeholder="Registration no."
                                                type="text"
                                                name="regno"
                                                onFocus={e => this.setState({ regno: true })}
                                                onBlur={e => this.setState({ regno: false })}
                                            />
                                        </InputGroup>
                                    </FormGroup>


                                    <FormGroup
                                        className={classnames({
                                            focused: this.state.emailFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="ni ni-email-83" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="email"
                                                placeholder="Email address"
                                                type="email"
                                                name="email"
                                                onFocus={e => this.setState({ emailFocused: true })}
                                                onBlur={e => this.setState({ emailFocused: false })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-phone" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="mobile"
                                                placeholder="Mobile No."
                                                type="text"
                                                name="phone"
                                                onFocus={e => this.setState({ phone: true })}
                                                onBlur={e => this.setState({ phone: false })}

                                            />
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-home" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="block"
                                                placeholder="Block name / Room no."
                                                type="text"
                                                name="block"
                                                onFocus={e => this.setState({ block: true })}
                                                onBlur={e => this.setState({ block: false })}

                                            />
                                        </InputGroup>
                                    </FormGroup>



                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user-secret" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="block"
                                                placeholder="Password"
                                                type="password"
                                                name="block"
                                                onFocus={e => this.setState({ password: true })}
                                                onBlur={e => this.setState({ password: false })}

                                            />
                                        </InputGroup>
                                    </FormGroup>


                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user-secret" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="block"
                                                placeholder="Confirm Password"
                                                type="password"
                                                name="block"
                                                onFocus={e => this.setState({ confirm_password: true })}
                                                onBlur={e => this.setState({ confirm_password: false })}

                                            />
                                        </InputGroup>
                                    </FormGroup>


                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user-secret" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="block"
                                                placeholder="Code of club/chapter applying"
                                                type="text"
                                                name="block"
                                                onFocus={e => this.setState({ cl_code: true })}
                                                onBlur={e => this.setState({ cl_code: false })}

                                            />
                                        </InputGroup>
                                    </FormGroup>

                                    <div>
                                        <center>
                                            <Link to='/'>
                                                <Button
                                                    className="my-4"
                                                    type="button"
                                                >
                                                    Sign Up
                    </Button></Link>

                                        </center>
                                    </div>
                                </form>

                                {/* End of the form */}

                            </Col>

                            <Col className="mb-lg-auto" lg="6">

                                <div style={{ margin: 'auto', textAlign: 'center' }}>
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{ height: "20em" }}
                                        src={require("../assets/img/user_signup.png")}

                                    />
                                    <h1 className="display-4  text-white" style={{ fontWeight: "300" }}>Just fill in the details and we will get back you ASAP!</h1>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        )
    }
}
export default UserSignUp;