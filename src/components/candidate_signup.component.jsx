import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import classnames from 'classnames'
import { Col, Row, Container, Button, FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { registerUser } from '../actions/authActions'
class UserSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameFocused: '',
            emailFocused: '',
            name: '',
            regNo: '',
            mobileNo: '',
            blockName: '',
            roomNo: '',
            clubCode: '',
            email: '',
            password: '',
            testId:'',
            errors: {},
            loading:false

        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);

        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/overview');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/overview')
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
        const userData = {
            regNo: this.state.regNo,
            password: this.state.password,
            email: this.state.email,
            mobileNo: this.state.mobileNo,
            blockName: this.state.blockName,
            roomNo: this.state.roomNo,
            clubCode: this.state.clubCode,
            name: this.state.name,
            testId:this.state.testId
        }
        this.buttonState();
        this.props.registerUser(userData, this.props.history);
    }
    render() {
        const { errors,loading } = this.state;
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
                                <form noValidate onSubmit={this.onSubmit}>
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
                                                onChange={this.onChange}
                                                value={this.state.name}
                                                error={errors.name}

                                                className={classnames("", {
                                                    invalid: errors.name || errors.namenotfound
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
                                            {errors.name}
                                        </span> </div>
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

                                                placeholder="Registration no."
                                                type="text"
                                                name="regNo"
                                                id='regNo'
                                                onChange={this.onChange}
                                                value={this.state.regNo}
                                                error={errors.regNo}

                                                className={classnames("", {
                                                    invalid: errors.regNo || errors.regnotfound
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
                                            {errors.regNo}
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
                                                name="email"
                                                onChange={this.onChangeAlter}
                                                value={this.state.email}
                                                error={errors.email}
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
                                                placeholder="Mobile No."
                                                type="text"
                                                name="phone"
                                                id='mobileNo'
                                                onChange={this.onChange}
                                                value={this.state.mobileNo}
                                                error={errors.mobileNo}

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
                                                    <i className="fa fa-home" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Block name / Room no.(NA if staying outside)"
                                                type="text"
                                                name="block"
                                                id='blockName'
                                                onChange={this.onChange}
                                                value={this.state.blockName}
                                                error={errors.blockName}

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
                                                placeholder="Password (Case sensitive)"
                                                type="password"
                                                name="block"
                                                id="password"
                                                onChange={this.onChangeAlter}
                                                value={this.state.password}
                                                error={errors.password}
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
                                                    <i className="fa fa-newspaper-o" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                id="testId"
                                                placeholder="Test ID"
                                                type="text"
                                                name="testId"
                                                onChange={this.onChangeAlter}
                                                value={this.state.testId}
                                                error={errors.testId}
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




                                    <FormGroup

                                    >
                                        <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-building-o" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Code of club/chapter applying"
                                                type="text"
                                                name="block"
                                                id="clubCode"
                                                onChange={this.onChangeAlter}
                                                value={this.state.clubCode}
                                                error={errors.clubCode}

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

                                    <div>
                                        <center>

                                            <Button
                                                className="my-4"
                                                type="submit"
                                                disabled={loading}
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
                                        style={{ height: "20em" }}
                                        src={require("../assets/img/user_signup.png")}

                                    />
                                    <h1 className="display-4  text-white" style={{ fontWeight: "300" }}>Just fill in the details and we will get back you ASAP!</h1>
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
UserSignUp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    { registerUser }
)(UserSignUp)