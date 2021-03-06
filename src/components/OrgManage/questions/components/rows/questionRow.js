import React from "react";

export class QuestionRow extends React.Component {
  render() {
    var onEditEvent = this.props.onEditEvent;
    var onDelEvent = this.props.onDelEvent;
    var question = this.props.question;

    return (
      <tr>
        <td>{question._id}</td>
        <td>{question.ques}</td>
        <td>{question.options + ","}</td>
        <td>{question.ans}</td>
        <td>
          <i className="material-icons" onClick={onEditEvent} style={{ cursor: 'pointer' }}>border_color</i>
          <i className="material-icons" onClick={onDelEvent} style={{ cursor: 'pointer' }}>delete</i>
        </td>
      </tr>
    );
  }
}
