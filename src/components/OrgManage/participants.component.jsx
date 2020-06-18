import React, { Component } from 'react'
import { Card, CardBody, Row, Col, Collapse, FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText, Button } from 'reactstrap'
import axios from 'axios'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from 'classnames'

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
        const { testId, clubCode, password } = this.state
        e.preventDefault();
        const data = {
            token: `${localStorage.getItem('jwtToken').split(" ")[1]}`,
            // token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZThhZGMxN2M2NjhhMGEzN2E4OTFjZCIsImNsdWJOYW1lIjoibWtiaGQiLCJjbHViQ29kZSI6IjEwMiIsImlhdCI6MTU5MjMxMjA2NiwiZXhwIjoxNTkyMzEyOTY2fQ.6VWQaCNGr8jByDK_qY1oOzoeUYyETY3uOsI9OO12bQU",
            testId: testId,
            clubCode: clubCode,
            password: password
        }
        axios
            .post('/api/post/orgs/checkResult', {
                "token": data.token,
                // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZThhZGMxN2M2NjhhMGEzN2E4OTFjZCIsImNsdWJOYW1lIjoibWtiaGQiLCJjbHViQ29kZSI6IjEwMiIsImlhdCI6MTU5MjMxMTk3OSwiZXhwIjoxNTkyMzEyODc5fQ.-Gz-wfVKGs2KqsVDFv7iL6vPKtzZIeyfNBp9mqbwEaM",
                "clubCode": data.clubCode,
                "testId": data.testId,
                "password": data.password
            })
            .then(res => {
                this.setState({
                    details: res.data
                })
            }

                // console.log(data)
                // console.log(res.data)
            ).catch(err => {
                alert("Sorry the requested resource could not be loaded.Please Refresh")
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
                                        
                                        id="clubCode"
                                        placeholder="Club Code"
                                        type="text"
                                        name="clubCode"
                                        onChange={this.onChange}
                                        value={this.state.clubCode}

                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup

                            >
                                <InputGroup className="input-group-alternative" >

                                    <Input
                                        id="testId"
                                        placeholder="Test ID"
                                        type="text"
                                        name="testId"
                                        onChange={this.onChange}
                                        value={this.state.testId}

                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup

                            >
                                <InputGroup className="input-group-alternative" >

                                    <Input
                                        id="password"
                                        placeholder="Password"
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
                        <ul id="detail-group">
                            {details.map(el => {
                                return (

                                    <Card className="shadow" key={el._id}>
                                        <CardBody className='stud-details'>
                                            <span className='stud-reg-no'>{el.regNo} </span>
                                            <span className='stud-name'>
                                                -  {el.name}<br />

                                            </span>
                                            <span onClick={toggle} className='detail-toggle'> More</span>
                                            <Collapse isOpen={this.state.isOpen} key={el._id} data-parent="#detail-group">
                                                <span>
                                                    Marks -  {el.marks}<br />
                                                </span>
                                                <span>
                                                    Mobile No. -  {el.mobileNo}<br />
                                                </span>
                                                <span>
                                                    Email ID -  {el.email}<br />
                                                </span>

                                            </Collapse>
                                        </CardBody></Card>




                                )
                            })}
                        </ul>
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