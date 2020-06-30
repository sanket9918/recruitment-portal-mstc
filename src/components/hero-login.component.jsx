import React from "react";
import classnames from "classnames";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser, loginOrg } from '../actions/authActions'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Nav,
  NavItem,
  Col,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Footer from "./footer.component";
export const history = createBrowserHistory();

class Login extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,

    regNo: '',
    password_user: '',
    email: '',
    password_org: '',
    errors: {},
    loading: false,
    loading_org:false

  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });

  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/overview');
    }
    if (this.props.auth.isAuthenticated_org) {
      this.props.history.push('/orgmanage');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/overview')
    }
    if (nextProps.auth.isAuthenticated_org) {
      this.props.history.push('/orgmanage')
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onChangeAlter = e => {
    this.setState({
      [e.target.id]: e.target.value.toUpperCase()
    })
  }
  buttonState() {
    this.setState({
      loading:true
    })
    setTimeout(() => {
      this.setState({
        loading: false
      })
    },5000)
  }
  buttonState_org() {
    this.setState({
      loading_org: true
    })
    setTimeout(() => {
      this.setState({
        loading_org: false
      })
    }, 5000)
  }
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      regNo: this.state.regNo,
      password: this.state.password_user
    };
    this.buttonState();



    this.props.loginUser(userData)
  }
  onSubmit_org = e => {
    e.preventDefault();
    const orgData = {
      email: this.state.email,
      password: this.state.password_org
    }
    this.buttonState_org();

    this.props.loginOrg(orgData);
  }

  render() {
    const { errors, loading,loading_org } = this.state
    return (
      <div>
        <section className="section section-lg section-shaped" >
          <div className="shape shape-style-1 shape-default">

          </div>
          <Container className="py-md">
            <Row className="row-grid justify-content-between align-items-center">
              <Col lg="6">
                <img
                  alt="..."
                  className="img-fluid"
                  style={{ paddingBottom: "1em", height: "15em" }}
                  src={require("../assets/img/selection.svg")}

                />
                <h1 className="display-3 text-white">
                  Recruitment Made Easy{" "}
                </h1>
                <p className="lead text-white">
                  Hassle-free unified test portal to help organisation to conduct exams
                  efficiently and reduce the time wastage.
                </p>                
              </Col>
              <Col className="mb-lg-auto" lg="6">

                {/* Menu */}
                <div className="mb-3">
                  <small className="text-uppercase font-weight-bold">
                    Sign In
              </small>
                </div>
                <div className="nav-wrapper">
                  <Nav
                    className="nav-fill flex-column flex-md-row"
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.plainTabs === 1}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.plainTabs === 1
                        })}
                        onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                        href="#pablo"
                        role="tab"
                      >
                        For Candidates
                  </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.plainTabs === 2}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.plainTabs === 2
                        })}
                        onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                        href="#pablo"
                        role="tab"
                      >
                        For Organisation
                  </NavLink>
                    </NavItem>                    
                  </Nav>
                </div>
                <Card className="shadow">
                  <CardBody style={{ padding: "0" }}>
                    <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                      <TabPane tabId="plainTabs1">


                        {/* The login form */}
                        <div>
                          <Card className="bg-secondary shadow border-0">
                            <CardHeader className="pb-1" style={{ backgroundColor: "rgb(35, 35, 113)" }}>
                              <div className="text-muted text-center mb-3" >
                                <h4 className="text-white">Sign In with Candidate ID</h4>
                              </div>

                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5" style={{ backgroundColor: "rgb(81, 81, 173)" }}>
                              <div className="text-center text-white ">
                                <small>Sign in with credentials</small>
                              </div>
                              <Form noValidate onSubmit={this.onSubmit}>
                                <FormGroup

                                >
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="ni ni-email-83" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Registration No."
                                      type="text"
                                      id="regNo"
                                      onChange={this.onChangeAlter}
                                      value={this.state.regNo}
                                      error={errors.regNo}
                                      onFocus={e =>
                                        this.setState({ emailFocused: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ emailFocused: false })
                                      }

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
                                    {errors.regnotfound}
                                  </span> </div>


                                <FormGroup
                                  className={classnames({
                                    focused: this.state.passwordFocused
                                  })}
                                >
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="ni ni-lock-circle-open" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Password (Case sensitive)"
                                      type="password"
                                      id="password_user"
                                      onChange={this.onChange}
                                      value={this.state.password_user}
                                      error={errors.password_user}
                                      autoComplete="off"
                                      className={classnames("", {
                                        invalid: errors.password|| errors.passwordincorrect
                                      })}
                                      onFocus={e =>
                                        this.setState({ passwordFocused: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocused: false })
                                      }
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
                                    {errors.passwordincorrect}
                                  </span> </div>
                                <div className="center-tag"
                                  style={{ margin: 'auto', textAlign: 'center' }}>
                                  {/* <Link to='/overview'> */}
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
                                    {loading && <span>Sign in</span>}
                                    {!loading && <span>Sign in</span>}
                    </Button>
                                  <Link to='/candsignup'>

                                    <Button
                                      className="my-4"
                                      type="button"
                                     
                                    >
                                      
                                      Sign Up
                    </Button></Link>
                                </div>


                              </Form>
                            </CardBody>
                          </Card>
                        </div>




                      </TabPane>
                      <TabPane tabId="plainTabs2">


                        <div>
                          <Card className="bg-secondary shadow border-0">
                            <CardHeader className="pb-1" style={{ backgroundColor: "rgb(35, 35, 113)" }}>
                              <div className="text-muted text-center mb-3" >
                                <h4 className="text-white">Sign In with Organisation ID</h4>
                              </div>

                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5" style={{ backgroundColor: "rgb(81, 81, 173)" }}>
                              <div className="text-center text-white ">
                                <small>Sign in with credentials</small>
                              </div>
                              <Form noValidate onSubmit={this.onSubmit_org}>
                                <FormGroup
                                  className={classnames("mb-3", {
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
                                      placeholder="Email"
                                      type="email"
                                      id='email'
                                      value={this.state.email}
                                      onChange={this.onChangeAlter}
                                      error={errors.email}
                                      className={classnames("", {
                                        invalid: errors.email || errors.emailnotfound
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
                                    {errors.emailnotfound}
                                  </span> </div>
                                <FormGroup
                                  className={classnames({
                                    focused: this.state.passwordFocused
                                  })}
                                >
                                  <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="ni ni-lock-circle-open" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Password (Case sensitive)"
                                      type="password"
                                      autoComplete="off"
                                      id='password_org'
                                      value={this.state.password_org}
                                      onChange={this.onChange}
                                      error={errors.password_org}
                                      className={classnames("", {
                                        invalid: errors.password|| errors.passwordincorrect
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
                                    {errors.passwordincorrect}
                                  </span> </div>

                                <div className="text-center">
                                  <Button
                                    className="my-4"
                                    type="submit"
                                    disabled={loading_org}

                                  >
                                    {loading_org && (
                                      <i
                                        className="fa fa-refresh fa-spin"
                                        style={{ marginRight: "5px" }}
                                      />
                                    )}
                                    {loading_org && <span>Sign in</span>}
                                    {!loading_org && <span>Sign in</span>}
                    </Button>
                                  <Link to='/orgsignup'>

                                    <Button
                                      className="my-4"
                                      type="button"
                                    >
                                      Sign Up
                    </Button></Link>
                                </div>
                              </Form>
                            </CardBody>
                          </Card>
                        </div>

                      </TabPane>                     
                    </TabContent>
                  </CardBody>
                </Card>



              </Col>
            </Row>
          </Container>

        </section>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  loginOrg: PropTypes.func,
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});



export default connect(
  mapStateToProps,
  { loginUser, loginOrg }
)(Login);
