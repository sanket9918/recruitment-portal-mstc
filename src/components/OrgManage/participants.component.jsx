import React, { Component } from 'react'
import { Card, CardBody, Row, Col, Collapse, FormGroup, InputGroup, Input, Button, Table } from 'reactstrap'
import axios from 'axios'
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Participants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            details: [],
            testId: '',
            password: '',
            clubCode: ''
        }

    }

    onSubmit = e => {
        const { password } = this.state
        const { org } = this.props.auth
        e.preventDefault();
        const data = {
            token: `${localStorage.getItem('jwtToken').split(" ")[1]}`,
            password: password
        }
        axios
            .post('https://stc-portal.herokuapp.com/api/post/orgs/checkResult', {
                "token": data.token,
                // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZThhZGMxN2M2NjhhMGEzN2E4OTFjZCIsImNsdWJOYW1lIjoibWtiaGQiLCJjbHViQ29kZSI6IjEwMiIsImlhdCI6MTU5MjMxMTk3OSwiZXhwIjoxNTkyMzEyODc5fQ.-Gz-wfVKGs2KqsVDFv7iL6vPKtzZIeyfNBp9mqbwEaM",
                "clubCode": `${org.clubCode}`,
                "testId": `${org.testId}`,
                "password": data.password
            })
            .then(res => {
                this.setState({
                    details: res.data
                })
            }
                
            ).catch(err => {
                alert("Sorry the requested resource could not be loaded.Please try agin")
            })
    }
    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    render() {

        const toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        const { details } = this.state       
        return (
            <div >
                <Row>
                    <Col>
                        <div className='center-tag'><h4>Participants Details</h4></div>
                        <form noValidate onSubmit={this.onSubmit} >


                            <FormGroup

                            >
                                <InputGroup className="input-group-alternative" >

                                    <Input
                                        id="password"
                                        placeholder="Enter password to verify"
                                        type="password"
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        name="password"

                                    />
                                </InputGroup>
                            </FormGroup>
                            <center>
                                <Button
                                    className="my-4"
                                    type="submit"
                                >
                                    Submit
                    </Button>

                            </center>
                        </form>
                        <div className='table-responsive'>
                            <div id="detail-group">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Reg.No</th>
                                            <th>Name</th>
                                            <th>Marks</th>
                                            <th>Mobile No.</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    </table>
                            {details.map(el => {
                                return (

                                    <table className="table table-hover" style={{tableLayout:'fixed'}}>                                        
                                        <tbody>
                                            <tr>
                                                <td style={{textAlign:'left'}}>{el.regNo}</td>
                                                <td style={{ textAlign: 'left' }}>{el.name}</td>
                                                <td style={{ textAlign: 'left' }}>{el.marks}</td>
                                                <td style={{ textAlign: 'left' }}>{el.mobileNo}</td>
                                                <td style={{ textAlign: 'left',wordWrap:'break-word' }}>{el.email}</td>
                                            </tr>
                                            
                                        </tbody>

                                        </table>
                                    


                                )
                            })}
                            </div>
                            </div>
                        {/* <Card className="shadow">
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
                        </Card> */}





                    </Col>
                </Row>
            </div>
        )
    }
}
Participants.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(
    mapStateToProps
)(Participants);