import React from "react";
import axios from "axios";
import { QuestionList } from "../components/questionList";

export default class QuestionHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.questions = [];
    this.state.shownQuestions = this.state.questions;
    this.state.filter = {
      questionId: "",
      questions: "",
      options: "",
      ans: ""
    };
    this.state.activeSort = "0";

    this.handleRowDel = this.handleRowDel.bind(this);
    this.handleRowAdd = this.handleRowAdd.bind(this);
    this.handleRowSave = this.handleRowSave.bind(this);
    this.buttonHeaderStyling = this.buttonHeaderStyling.bind(this);
  }

  // CSS methods
  buttonHeaderStyling(buttonName) {
    return (
      (this.state.activeSort === buttonName + "Asc"
        ? "button-secondary"
        : this.state.activeSort === buttonName + "Dsc"
          ? "button-tertiary"
          : "") + " button-sort"
    );
  }


  handleRowDel(question) {
    let index = this.state.questions.indexOf(question);
    let questions = this.state.questions;

    questions.splice(index, 1);
    let shownQuestions = questions



    // Delete on API

    axios
      .delete("/api/post/orgs/questions/" + question.questionId,{
        data: {
          'clubCode': 102,
          'testId': 1004,
          'token': `${localStorage.getItem('jwtToken').split(" ")[1]}`
        }
        
      })
      .then(
        this.setState({
          questions: questions,
          shownQuestions: shownQuestions
        })
      )
      .catch(err => {
        console.log(JSON.stringify(err.config));
      });
  }

  handleRowAdd(question) {
    // Create on API
    axios
      .post("/api/post/orgs/questions/" + question.questionId, {

        'clubCode': 102,
        'testId': 1004,
        'token': `${localStorage.getItem('jwtToken').split(" ")[1]}`,
        'question': {
         '_id': question.questionId,
          'ques': question.questions,
          'options': question.options.split(","),
          'ans': question.ans,
        }




      })
      .then(res => {
        question._id = res.data._id;
      })
      .catch(err => {
        JSON.stringify(err.config);
      });

    // Update State and the data shown filtered/sorted
    let questions = this.state.questions;
    questions.push(question);

    let shownQuestions = questions



    this.setState({
      questions: questions,
      shownQuestions: shownQuestions
    });
  }

  handleRowSave(question) {
    // Update on API
    axios
      .put("/api/post/orgs/questions/" + question.questionId, {
        'clubCode': 102,
        'testId': 1004,
        'token': `${localStorage.getItem('jwtToken').split(" ")[1]}`,
        'question': {
          '_id': question.questionId,
          'ques': question.questions,
          'options': question.options,
          'ans': question.ans,
        }
      })
      .then()
      .catch(err => {
        console.log(err.response);
      });
  }

  handleFilterChange(evt) {
    let filters = this.state.filter;
    filters[evt.target.name] = evt.target.value;

    let shownQuestions = this.state.questions.filter


    this.setState({ filter: filters, shownQuestions: shownQuestions });
  }



  // Lifecycle Methods
  componentDidMount() {
    // Read All on API
    axios
      .get("http://localhost:3001/questions")
      .then(res => {
        let shownQuestions = res.data

        this.setState({
          questions: res.data,
          shownQuestions: shownQuestions
        });
      })
      .catch(err => {
        console.log("API GET : Error " + err.response);
      });
  }

  render() {
    return (
      <QuestionList
        questions={this.state.shownQuestions}
        filterValue={this.state.filter}
        onRowDel={this.handleRowDel}
        onRowAdd={this.handleRowAdd}
        onRowSave={this.handleRowSave}
        onFilterChange={this.handleFilterChange}
        setButtonHeaderStyle={this.buttonHeaderStyling}
      />
    );
  }
}
