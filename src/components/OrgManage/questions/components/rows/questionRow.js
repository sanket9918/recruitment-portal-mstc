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
        <td>{question.options}</td>
        <td>{question.ans}</td>
        <td>
          <button onClick={onEditEvent} className="button-edit pure-button">
            <i className="material-icons">border_color</i>
          </button>
          <button onClick={onDelEvent} className="button-error">
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    );
  }
}
