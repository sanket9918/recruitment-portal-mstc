import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import classnames from 'classnames'
import {Col,Row,Container,Button,FormGroup,InputGroup,Input,InputGroupAddon,InputGroupText } from 'reactstrap'
class OrgSignUp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            nameFocused: '',
            emailFocused:''
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
                                <div style={{margin:'auto',textAlign:'center'}}></div>
                                <h2 className="display-3 text-white">
                                    Let's get started
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
                                                placeholder="Name of the Chapter/Club"
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
                                                
                                            />
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="no_candi"
                                                placeholder="No. of expected candidates"
                                                type="text"
                                                name="no_candi"

                                            />
                                        </InputGroup>
                                    </FormGroup>

                                    
                                    <FormGroup className="mb-4">
                                        <Input
                                            id="message"
                                            className="form-control-alternative"
                                            cols="80"
                                            name="message"
                                            placeholder="Any other customisations..."
                                            rows="4"
                                            type="textarea"
                                        />
                                    </FormGroup>
                                    <div>
                                        <center>
                                           
                                                <Button
                                                    className="my-4"
                                                    type="button"
                                                    href="/"
                                                >
                                                    Sign Up
                    </Button>
                                            
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
                                        style={{ paddingBottom: "1em",marginTop:"4em", height: "15em" }}
                                        src={require("../assets/img/delivery-4.png")}

                                    />
                                    <h1 className="display-4  text-white">Provide necessary details and we will get back to you shortly.</h1>
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

export default OrgSignUp;
