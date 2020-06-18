import React from "react";

export class NewRow extends React.Component {
  render() {
    var onSaveEvent = this.props.onSaveEvent;
    let cellChange = this.props.onCellChange;

    return (
      <tr>
        <td>
          <input
            type="text"
            name="questionId"
            value={this.props.questionId}
            onChange={cellChange}
            className="input"
          />
        </td>
        <td>
          <input
            type="text"
            name="questions"
            value={this.props.questions}
            onChange={cellChange}
            className="input"
          />
        </td>
        <td>
          <input
            type="text"
            name="options"
            value={this.props.options}
            onChange={cellChange}
            className="input"
          />
        </td>
        <td>
          <input
            type="text"
            name="ans"
            value={this.props.ans}
            onChange={cellChange}
            className="input"
          />
        </td>
        <td>
          <button onClick={onSaveEvent} className="button-success pure-button">
            <i className="material-icons">add_circle</i>
          </button>
        </td>
      </tr>
    );
  }
}
