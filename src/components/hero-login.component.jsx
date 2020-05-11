import React from "react";
// import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";

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
class Login extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
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
                <div className="btn-wrapper">
                  {/* <Button color="success" to="/login-page" tag={Link}>
                    Login Page
                  </Button>
                  <Button
                    className="btn-white"
                    color="default"
                    to="/register-page"
                    tag={Link}
                  >
                    Register Page
                  </Button> */}
                </div>
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
                    {/* <NavItem>
                      <NavLink
                        aria-selected={this.state.plainTabs === 3}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.plainTabs === 3
                        })}
                        onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                        href="#pablo"
                        role="tab"
                      >
                        For Admins
                  </NavLink>
                    </NavItem> */}
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
                              <Form role="form">
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
                                      onFocus={e =>
                                        this.setState({ emailFocused: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ emailFocused: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
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
                                      placeholder="Password"
                                      type="password"
                                      autoComplete="off"
                                      onFocus={e =>
                                        this.setState({ passwordFocused: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocused: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                  <Link to='/overview'>
                                    <Button
                                      className="my-4"
                                      type="button"
                                    >
                                      Sign in
                    </Button> </Link>
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
                              <Form role="form">
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
                                      onFocus={e =>
                                        this.setState({ emailFocused: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ emailFocused: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
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
                                      placeholder="Password"
                                      type="password"
                                      autoComplete="off"
                                      onFocus={e =>
                                        this.setState({ passwordFocused: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocused: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>

                                
                                <div className="text-center">
                                  <Link to='/orgmanage'>
                                    <Button
                                      className="my-4"
                                      type="button"
                                    >
                                      Sign in
                    </Button> </Link>
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
                      <TabPane tabId="plainTabs3">



                        {/* <div>
                          <Card className="bg-secondary shadow border-0">
                            <CardHeader className="pb-1" style={{ backgroundColor: "rgb(35, 35, 113)" }}>
                              <div className="text-muted text-center mb-3" >
                                <h4 className="text-white">Sign In with Admin ID</h4>
                              </div>

                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5" style={{ backgroundColor: "rgb(81, 81, 173)" }}>
                              <div className="text-center text-white ">
                                <small>Sign in with credentials</small>
                              </div>
                              <Form role="form">
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
                                      onFocus={e =>
                                        this.setState({ emailFocused: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ emailFocused: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
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
                                      placeholder="Password"
                                      type="password"
                                      autoComplete="off"
                                      onFocus={e =>
                                        this.setState({ passwordFocused: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocused: false })
                                      }
                                    />
                                  </InputGroup>
                                </FormGroup>
                                
                                <div className="text-center">
                                  <Button
                                    className="my-4"
                                    type="button"
                                    href="/"
                                  >
                                    Sign in
                    </Button>
                                </div>
                              </Form>
                            </CardBody>
                          </Card>
                        </div> */}





                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>



              </Col>
            </Row>
          </Container>

        </section>
      </div>
    );
  }
}

export default Login;
