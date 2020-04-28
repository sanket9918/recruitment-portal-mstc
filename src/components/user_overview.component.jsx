import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import { Container,Row,Col,Button} from 'reactstrap'
class CandProfile extends Component{
    render()
    {
        return (
            <div>
                <Navbar1 />
                    <section className="section section-shaped">
                        <div className="shape shape-style-1 shape-default">

                        </div>
                        <Container className="py-md">
                            <Row className="justify-content-between align-items-center">
                                <Col className="mb-lg-auto" lg="6">
                                <div style={{ margin: "auto", textAlign: "center" }}>
                                <h2 className="display-3 text-white">
                                    Candidate details
                                </h2>
                                
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    style={{ paddingBottom: "1em", height: "10em" }}
                                    src={require("../assets/img/happy.svg")}

                                />
                                <h4 id="Name" className="text-white">Dan Brown</h4>
                                <h4 id="reg_no" className="text-white">18BCEXXX</h4>
                                </div>
                            </Col>
                            
                            <Col className="mb-lg-auto"  lg="6">
                                <div style={{ margin: "auto", textAlign: "center" }}>

                                    <h2 className="display-3 text-white">
                                        Exam Instructions
                                </h2>
                                </div>
                                <div style={{ margin: "auto", textAlign: "left" }}>
                                    <ul>
                                        <li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li>
                                        <li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li><li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li>
                                    </ul>
                                    

                                </div>
                                <div style={{ margin: "auto", textAlign: "right" }}>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        
                                        <label
                                            className="custom-control-label"
                                            htmlFor="customCheckLogin2"
                                        >
                                            <span className="text-white">I agree to exam rules and conditions.</span>
                                            
                                        </label>
                                        <input
                                            className="custom-control-input"
                                            id="customCheckLogin2"
                                            type="checkbox"
                                        />
                                    </div>
                                    <Button
                                        className="my-4"
                                        type="button"
                                        href="/finish"
                                    >
                                        Proceed
                                    </Button>
                                    
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

export default CandProfile;
