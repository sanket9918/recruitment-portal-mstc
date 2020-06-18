import React from "react";
import { Question } from "../containers/question";
import "../styles/AppointmentList.css";

export class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let rows = [];

    let rowDel = this.props.onRowDel;
    let onRowAdd = this.props.onRowAdd;
    let onRowSave = this.props.onRowSave;
    let onFilterChange = this.props.onFilterChange;
    let onColumnSort = this.props.onColumnSort;
    let buttonHeaderStyling = this.props.setButtonHeaderStyle;
    let filter = this.props.filterValue;

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
    var emptyQuestion = { _id: "", questionId: "", questions: "", options: "", ans: "" };
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
          <h4>Question Roster</h4>
        </center>
        <table className="table-list">
          <thead className="table-head">
            <tr>
              <th>
                <button
                  name="questionId"
                  onClick={onColumnSort}
                  className={buttonHeaderStyling("nameSort")}
                >
                  {" "}
                  Question ID{" "}
                </button>
              </th>
              <th>
                <button
                  name="question"
                  onClick={onColumnSort}
                  className={buttonHeaderStyling("phoneSort")}
                >
                  {" "}
                  Question{" "}
                </button>
              </th>
              <th>
                <button
                  name="options"
                  onClick={onColumnSort}
                  className={buttonHeaderStyling("timeSort")}
                >
                  {" "}
                  Option{" "}
                </button>
              </th>
              <th>
                <button
                  name="ans"
                  onClick={onColumnSort}
                  className={buttonHeaderStyling("descSort")}
                >
                  {" "}
                  Answer{" "}
                </button>
              </th>
              <th className="LastColumn" />
            </tr>
          </thead>
          <tbody>
            <tr className="pure-table-odd">
              <td>
                <input
                  name="questionId"
                  type="text"
                  onChange={onFilterChange}
                  value={filter.questionId}
                  className="input"
                />
              </td>
              <td>
                <input
                  name="questions"
                  type="text"
                  onChange={onFilterChange}
                  value={filter.questions}
                  className="input"
                />
              </td>
              <td>
                <input
                  name="options"
                  type="text"
                  onChange={onFilterChange}
                  value={filter.options}
                  className="input"
                />
              </td>
              <td>
                <input
                  name="ans"
                  type="text"
                  onChange={onFilterChange}
                  value={filter.ans}
                  className="input"
                />
              </td>
              <td>
                <i className="fa fa-search"></i>
              </td>
            </tr>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
