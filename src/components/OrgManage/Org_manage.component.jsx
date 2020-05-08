import React, { Component } from 'react'
import Navbar1 from '../navbar.component';
import Footer from '../footer.component';
import { Container, Col, Row, Button ,Collapse} from 'reactstrap'
import '../../assets/scss/org_sign.scss'
class OrgManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orgName: 'VIT Music Club',
            isOpen : true
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
        const placeholder_text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum fugit, sequi nisi minus commodi quam quae numquam repudiandae magnam. Dolore eum iure ducimus quibusdam neque. Quibusdam ex dolore sint!'
        return (
            <div>
                <Navbar1 />

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


                                            <div className="options" tabIndex="0">Questions</div>
                                            <div className="options" tabIndex="0">Participants</div>
                                            <div className="options" tabIndex="0">Contact Us</div>
                                        </div>
                                    </Collapse>
                                    
                                </div>
                            </Col>
                            <Col className="mb-lg-auto" lg="8">
                                <div className="placeholder">{placeholder_text}{placeholder_text}{placeholder_text}</div>
                            </Col>
                        </Row>

                    </Container>
                </section>

                <Footer />
            </div>
        )
    }
}

export default OrgManage;
