import React from "react";

export class EditRow extends React.Component {
	render() {
		var question = this.props.question;
		var onSaveEvent = this.props.onSaveEvent;
		let onDelEvent = this.props.onDelEvent;
		let onCellChange = this.props.onCellChange;

		return (
			<tr>
				<td>
					<input
						type="text"
						_id={question._id}
						name="questionId"
						defaultValue={question.questionId}
						onChange={onCellChange}
						className="input"
					/>
				</td>
				<td>
					<input
						type="text"
						_id={question._id}
						name="questions"
						defaultValue={question.questions}
						onChange={onCellChange}
						className="input"
					/>
				</td>
				<td>
					<input
						type="text"
						_id={question._id}
						name="options"
						defaultValue={question.options}
						onChange={onCellChange}
						className="input"
					/>
				</td>
				<td>
					<input
						type="text"
						_id={question._id}
						name="ans"
						defaultValue={question.ans}
						onChange={onCellChange}
						className="input"
					/>
				</td>
				<td>
					<i className="material-icons" onClick={onSaveEvent} style={{ cursor: 'pointer' }}>done</i>
					<i className="material-icons" onClick={onDelEvent} style={{ cursor: 'pointer' }}>delete</i>
				</td>
			</tr>
		);
	}
}
