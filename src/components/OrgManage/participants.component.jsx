import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { backURL } from '../../utils/integration'
class Participants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            details: [],
            testId: '',
            password: '',
            clubCode: '',
            loading: false,
            xls_download: false
        }

    }

    exportTableToExcel(tableID, filename = '') {
        var downloadLink;
        var dataType = 'application/vnd.ms-excel';
        var tableSelect = document.getElementById(tableID);
        var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

        // Specify file name
        filename = filename ? filename + '.xls' : 'excel_data.xls';

        // Create download link element
        downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            var blob = new Blob(['\ufeff', tableHTML], {
                type: dataType
            });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            // Create a link to the file
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

            // Setting the file name
            downloadLink.download = filename;

            //triggering the function
            downloadLink.click();
        }
    }

    onSubmit = e => {
        const { password } = this.state
        const { org } = this.props.auth
        e.preventDefault();
        this.setState({
            loading: true
        })
        const data = {
            token: `${localStorage.getItem('jwtToken').split(" ")[1]}`,
            password: password
        }
        axios
            .post(`${backURL}/api/post/orgs/checkResult`,{
                "token": data.token,
                // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZThhZGMxN2M2NjhhMGEzN2E4OTFjZCIsImNsdWJOYW1lIjoibWtiaGQiLCJjbHViQ29kZSI6IjEwMiIsImlhdCI6MTU5MjMxMTk3OSwiZXhwIjoxNTkyMzEyODc5fQ.-Gz-wfVKGs2KqsVDFv7iL6vPKtzZIeyfNBp9mqbwEaM",
                "clubCode": `${org.clubCode}`,
                "testId": `${org.testId}`,
                "password": data.password
            })
            .then(res => {
                this.setState({
                    details: res.data,
                    xls_download: true,
                    loading: false
                })
            }

            ).catch(err => {
                alert("Sorry the requested resource could not be loaded.Please try again")
            })
    }
    onChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    render() {
        const { details, xls_download } = this.state
        return (
            <div >
                <Row>
                    <Col>
                        <div className='center-tag'><h4>Participants Details</h4></div>
                        <form noValidate onSubmit={this.onSubmit} >
                            <center>
                                <span>Get the latest results of the test.</span><br />

                                <Button
                                    className="my-4"
                                    type="submit"
                                    disabled={this.state.loading}
                                >
                                    {this.state.loading ? (<><i
                                        className="fa fa-refresh fa-spin"
                                        style={{ marginRight: "5px" }}
                                    /><span>Processing</span></>) :
                                        <span>Fetch Results</span>
                                    }
                    </Button>

                            </center>
                        </form>
                        <div className='center-tag'>
                            {xls_download ? <Button
                                className="my-4"
                                type="button"
                                onClick={() => {
                                    this.exportTableToExcel('participants', 'participant-list');
                                }}
                            >
                                Export to xls
                    </Button> : ''} </div>
                        <div className='table-responsive'>
                            <div id="detail-group">
                                <table className="table-list" id='participants'>
                                    <thead className='table-head'>
                                        <tr >
                                            <th>Reg.No</th>
                                            <th>Name</th>
                                            <th>Marks</th>
                                            <th>Mobile No.</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    {details.map(el => {
                                        return (

                                            <tbody>
                                                <tr>
                                                    <td style={{ textAlign: 'left' }}>{el.regNo}</td>
                                                    <td style={{ textAlign: 'left' }}>{el.name}</td>
                                                    <td style={{ textAlign: 'left' }}>{el.marks}</td>
                                                    <td style={{ textAlign: 'left' }}>{el.mobileNo}</td>
                                                    <td style={{ textAlign: 'left', wordWrap: 'break-word' }}>{el.email}</td>
                                                </tr>

                                            </tbody>





                                        )
                                    })}
                                </table>
                            </div>


                        </div>

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