import React from "react"
import TaskList from "./taskList"


import { NotificationContainer, NotificationManager } from 'react-notifications';
class QuestionHolder extends React.Component {
    state = {
        taskList: [{ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" ,option4:""}],
        date: "",
        description: "",
    }
   
    handleChange = (e) => {
        if (["projectName", "task", "taskNotes", "taskStatus","option4"].includes(e.target.name)) {
            let taskList = [...this.state.taskList]
            taskList[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
            this.setState({ [e.target.name]: e.target.value })
        }
    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            taskList: [...prevState.taskList, { index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" ,option4:""}],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
        });
        // const taskList1 = [...this.state.taskList];
        // taskList1.splice(index, 1);
        // this.setState({ taskList: taskList1 });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.date==='' || this.state.description==='')
        {
            NotificationManager.warning("Please Fill up Required Field . Please check Task and Date Field");
            return false;
        }
        for(var i=0;i<this.state.taskList.length;i++)
        {
                if(this.state.taskList[i].projectName==='' || this.state.taskList[i].task==='')
                {
                    NotificationManager.warning("Please Fill up Required Field.Please Check Project name And Task Field");
                    return false;
                }
        }
       
    }
    clickOnDelete(record) {
        this.setState({
            taskList: this.state.taskList.filter(r => r !== record)
        });
    }
    render() {
        let { taskList } = this.state//let { notes, date, description, taskList } = this.state
        return (
            <div className="content">
                <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                    <div className="row" style={{ marginTop: 20 }}>
                        {/* <div className="col-sm-1"></div> */}
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header text-center">Question Roster</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="required">Test Date</label>
                                                <input type="date"  name="date" id="date" className="form-control" placeholder="Enter Date" />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group ">
                                                <label className="required">Extra Instruction</label>
                                                <textarea name="description"  id="description" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{overflowX:"auto"}}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="required" >Question</th>
                                                <th className="required" >Option 1</th>
                                                <th className="required">Option 2</th>
                                                <th className="required">Option 3</th>
                                                <th className="required">Option 4</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} taskList={taskList} />
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button onClick={this.addNewRow} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                            </td></tr>
                                        </tfoot>
                                        </table>
                                    </div>
                                </div>
                                <div className="center-tag">
                                <NotificationContainer />
                                </div>
                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </div>
                        </div>
                       
                    </div>
                </form>
            </div>
        )
    }
}
export default QuestionHolder;