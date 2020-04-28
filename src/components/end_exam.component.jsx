import React from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import { Container, Row, Col, Button } from 'reactstrap'

function Finish() {
    return (
        <div>
            <Navbar1 />


            <section className="section section-lg section-shaped">
                <div className="shape shape-style-1 shape-default">
                    
                </div>
                <Container className="py-md">
                    <Row className="row-grid justify-content-between align-items-center">
                       <div style={{margin:"auto",textAlign:"center"}}>
                            <Col lg="12">
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    style={{ paddingBottom: "1em",height:"10em" }}
                                    src={require("../assets/img/happy.svg")}

                                />
                                <h1 className="display-3 text-white">
                                    You have sucessfully completed the exam.
                                </h1>
                                <p className="lead text-white">
                                    We will be reaching out to you as soon as the evaluation is done.
                                     
                                </p>

                                <Button
                                    className="my-4"
                                    type="button"
                                    href = "/"
                                >
                                    Log Out
                                </Button>
                                
                            
                            </Col>
                        </div>
                    </Row>
                </Container>
            </section>
            


            <Footer />
            
        </div>
    );
}

export default Finish;


