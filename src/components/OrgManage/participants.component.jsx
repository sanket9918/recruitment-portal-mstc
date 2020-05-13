import React, { Component } from 'react'
import {Card, CardBody,Row,Col,Collapse} from 'reactstrap'
class Participants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {

        const toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        return (
            <div>
                <Row>
                    <Col>
            
                       

                <Card className="shadow">
                    <CardBody className='stud-details'>
                        <span>
                            <span className='stud-reg-no'>
                                        18BCE0359-

                            </span>
                                    
                            <span className='stud-name'>
                                        Sanket Mohapatra<br />
                                         
                        </span>
                                    <span onClick={toggle} className='detail-toggle'> More</span>
                                    <Collapse isOpen={this.state.isOpen}> 
                                        <Card>
                                            <CardBody>
                                                <span>
                                                    Email: abc@gmail.com<br />

                                                    Mobile No.- 9000000009 <br />

                                                    Gender: Male <br />
                                                    
                                                    Room No. 406 <br />

                                                    Block - K-Block <br />


                                                </span>
                                            </CardBody>

                                   </Card>
                                    </Collapse>
                        </span>
                    </CardBody>
                            </Card>
                            
                        

                        <Card className="shadow">
                            <CardBody className='stud-details'>
                                <span>
                                    <span className='stud-reg-no'>
                                        18BCE0359-

                            </span>

                                    <span className='stud-name'>
                                        Sanket Mohapatra<br />

                                    </span>
                                    <span onClick={toggle} className='detail-toggle'> More</span>
                                    <Collapse isOpen={this.state.isOpen}>
                                        <Card>
                                            <CardBody>
                                                <span>
                                                    Email: abc@gmail.com<br />

                                                    Mobile No.- 9000000009 <br />

                                                    Gender: Male <br />

                                                    Room No. 406 <br />

                                                    Block - K-Block <br />


                                                </span>
                                            </CardBody>

                                        </Card>
                                    </Collapse>
                                </span>
                            </CardBody>
                        </Card>


                        <Card className="shadow">
                            <CardBody className='stud-details'>
                                <span>
                                    <span className='stud-reg-no'>
                                        18BCE0359-

                            </span>

                                    <span className='stud-name'>
                                        Sanket Mohapatra<br />

                                    </span>
                                    <span onClick={toggle} className='detail-toggle'> More</span>
                                    <Collapse isOpen={this.state.isOpen}>
                                        <Card>
                                            <CardBody>
                                                <span>
                                                    Email: abc@gmail.com<br />

                                                    Mobile No.- 9000000009 <br />

                                                    Gender: Male <br />

                                                    Room No. 406 <br />

                                                    Block - K-Block <br />


                                                </span>
                                            </CardBody>

                                        </Card>
                                    </Collapse>
                                </span>
                            </CardBody>
                        </Card>

                        
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Participants;