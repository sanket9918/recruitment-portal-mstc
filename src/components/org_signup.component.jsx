import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import classnames from 'classnames'
import { Col, Row, Container, Button, FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerOrg } from '../actions/authActions'

class OrgSignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameFocused: '',
            emailFocused: '',
            clubName: '',
            clubCode: '',
            mobileNo: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordMatch: false,
            extras: '',
            testId: '',
            errors: {},
            loading: false
        }
        this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this)

    }

    componentDidMount() {
        window.scrollTo(0, 0);

        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/orgmanage')
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/orgmanage')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }
    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value.toUpperCase()
        })

    }
    onChangeAlter = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onChangePasswordConfirm(e) {
        this.setState({
            [e.target.id]: e.target.value
        }, () => {
            if (this.state.confirmPassword === this.state.password) {
                this.setState({
                    passwordMatch: true
                })
            } else {
                this.setState({
                    passwordMatch: false
                })
            }
        })

    }
    buttonState() {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 5000)
    }

    onSubmit = (e) => {
        e.preventDefault();
        const orgData = {
            clubCode: this.state.clubCode,
            clubName: this.state.clubName,
            email: this.state.email,
            password: this.state.password,
            extras: this.state.extras,
            mobileNo: this.state.mobileNo,
            testId: this.state.testId
        }
        this.buttonState();
        this.props.registerOrg(orgData, this.props.history);
    }


    render() {
        const { errors, loading } = this.state;
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
                                    Let's get started
                                </h2>


                                {/* The start of the form  */}
                                <form noValidate onSubmit={this.onSubmit}>
                                    <FormGroup
                                        className={classnames("mt-5", {
                                            focused: this.state.nameFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="clubName"
                                                placeholder="Name of the Chapter/Club"
                                                type="text"
                                                name="name"
                                                onChange={this.onChange}
                                                value={this.state.clubName}
                                                error={errors.clubName}
                                                className={classnames("", {
                                                    invalid: errors.clubName || errors.namenotfound
                                                })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.clubName}
                                        </span> </div>
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
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                name="email"

                                                className={classnames("", {
                                                    invalid: errors.email || errors.regnotfound
                                                })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.email}
                                        </span> </div>
                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-phone" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="mobileNo"
                                                placeholder="Mobile No."
                                                type="number"
                                                name="mobileNo"
                                                onChange={this.onChange}
                                                error={errors.mobileNo}
                                                value={this.state.mobileNo}
                                                className={classnames("", {
                                                    invalid: errors.mobileNo
                                                })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.mobileNo}
                                        </span> </div>

                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user-secret" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="password"
                                                placeholder="Password (Case sensitive)"
                                                type="password"
                                                name="password"
                                                onChange={this.onChangeAlter}
                                                value={this.state.password}
                                                error={errors.password}
                                                className={classnames("", {
                                                    invalid: errors.password || errors.regnotfound
                                                })}

                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.password}
                                        </span> </div>
                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-user-secret" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Confirm Password"
                                                type="password"
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                onChange={this.onChangePasswordConfirm}
                                                value={this.state.confirmPassword}
                                                error={errors.confirmPassword}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>
                                        {this.state.confirmPassword.length >= 1 ? (this.state.passwordMatch ? (<span className="red-text"
                                            style={
                                                {
                                                    color: 'green'
                                                }
                                            }>
                                            Passwords are matching!
                                        </span>) : (<span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            Passwords are not matching!
                                        </span>)) : ''}
                                    </div>

                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-building-o" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="clubCode"
                                                placeholder="Club Code"
                                                type="text"
                                                name="clubCode"
                                                onChange={this.onChangeAlter}
                                                error={errors.clubCode}
                                                value={this.state.clubCode}
                                                className={classnames("", {
                                                    invalid: errors.clubCode
                                                })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.clubCode}
                                        </span> </div>



                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-newspaper-o" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="testId"
                                                placeholder="Test ID"
                                                type="text"
                                                name="testId"
                                                onChange={this.onChangeAlter}
                                                error={errors.testId}
                                                value={this.state.testId}
                                                className={classnames("", {
                                                    invalid: errors.testId
                                                })}
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className="center-tag"
                                        style={{ margin: 'auto', textAlign: 'center', marginBottom: "1em" }}>

                                        <span className="red-text"
                                            style={
                                                {
                                                    color: 'red'
                                                }
                                            }>
                                            {errors.testId}
                                        </span> </div>


                                    <FormGroup className="mb-4">
                                        <Input
                                            id="extras"
                                            className="form-control-alternative"
                                            cols="80"
                                            name="message"
                                            placeholder="Any other customisations..."
                                            rows="4"
                                            type="textarea"
                                            onChange={this.onChange}
                                            value={this.state.extras}

                                        />
                                    </FormGroup>
                                    <div>
                                        <center>
                                            <Button
                                                className="my-4"
                                                type="submit"

                                                disabled={(this.state.passwordMatch && this.state.clubName.length >= 1 && this.state.clubCode.length >= 1 && this.state.email.length >= 1 && this.state.testId.length >= 1) ? false : true}

                                            >
                                                {loading && (
                                                    <i
                                                        className="fa fa-refresh fa-spin"
                                                        style={{ marginRight: "5px" }}
                                                    />
                                                )}
                                                {loading && <span>Register</span>}
                                                {!loading && <span>Register</span>}
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
                                        style={{ paddingBottom: "1em", marginTop: "4em", height: "15em" }}
                                        src={require("../assets/img/delivery-4.png")}

                                    />
                                    <h1 className="display-4  text-white" style={{ fontWeight: "300" }}>Provide necessary details and we will get back to you shortly.</h1>
                                    <span>If you encounter any problem , please refresh</span>
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

OrgSignUp.propTypes = {
    registerOrg: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { registerOrg }
)(OrgSignUp)