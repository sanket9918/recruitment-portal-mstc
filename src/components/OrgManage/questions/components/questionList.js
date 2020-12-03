import React from "react";
import { Question } from "../containers/question";
import "../styles/QuestionList.css";
import { Button } from 'reactstrap'
import axios from 'axios'
import { backURL } from '../../../../utils/integration'

export class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testMode: '',
      loading: false
    };
  }

  getTestStatus() {
    axios.post(`${backURL}/api/post/orgs/getTestStatus`, {

      "testId": `${this.props.testId}`

    }).then(res => {
      this.setState({
        testMode: res.data
      })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.getTestStatus()
  }

  render() {
    let rows = [];

    let rowDel = this.props.onRowDel;
    let onRowAdd = this.props.onRowAdd;
    let onRowSave = this.props.onRowSave;

    this.props.questions.forEach(function(question) {
      rows.push(
        <Question
          question={question}
          onDelEvent={rowDel}
          onRowSave={onRowSave}
          key={question._id}
        />
      );
    });
    var emptyQuestion = { _ids: "", _id: "", ques: "", options: "", ans: "" };
    rows.push(
      <Question
        question={emptyQuestion}
        newMode={true}
        key="newQuestion"
        onRowAdd={onRowAdd}
      />
    );
    return (
      <div className="question-list">
        <center>
          <h4>Test Status</h4>
          <span>Currently, the test is : {this.state.testMode ? (<span style={{ color: 'green' }}>ENABLED</span>) : (<span style={{ color: 'red' }}>DISABLED</span>)}</span><br />
          <Button
            className="my-4"
            type="button"
            disabled={this.state.loading}
            onClick={() => {
              this.setState({
                loading: true
              })
              const { testMode } = this.state
              axios.post(`${backURL}/api/post/orgs/updateTestStatus`, {
                "updateTestStatus": !testMode,
                "testId": `${this.props.testId}`
              }).then(res => {
                this.setState({
                  testMode: !testMode,
                  loading: false
                })

              })
            }}
          >
            {this.state.loading ? (<><i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            /><span>Processing</span></>) :
              <span>Toggle Availability</span>
            }
                    </Button>
        </center>
        <center>
          <h4>Question Roster</h4>
        </center>
        <table className="table-list">
          <thead className="table-head">
            <tr style={{textAlign:'center'}}>
              <th>
                <span
                  name="_id"
                  // onClick={onColumnSort}
                >
                  {" "}
                  Question ID{" "}
                </span>
              </th>
              <th>
                <span
                  name="ques"
                  // onClick={onColumnSort}
                >
                  {" "}
                  Question{" "}
                </span>
              </th>
              <th>
                <span
                  name="options"
                  // onClick={onColumnSort}
                >
                  {" "}
                  Option{" "}
                </span>
              </th>
              <th>
                <span
                  name="ans"
                  // onClick={onColumnSort}
                >
                  {" "}
                  Answer{" "}
                </span>
              </th>
              <th className="LastColumn" />
            </tr>
          </thead>
          <tbody>            
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
