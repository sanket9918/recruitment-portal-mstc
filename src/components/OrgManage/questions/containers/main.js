import React from "react";
import axios from "axios";
import { QuestionList } from "../components/questionList";
import { propAscSort, propDescSort, inputFilter } from "../utils/appointments";

export default class QuestionHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.questions = [
      {
        _id: "1",
        questionId: "Person One",
        questions: "04 78 97 87 65",
        options: "15:00 15/07/18",
        ans: "Paint job"
      },
      {
        _id: "2",
        questionId: "People Two",
        questions: "05 74 74 74 74",
        options: "10:00 05/12/18",
        ans: "Wheel fixation"
      },
      {
        _id: "3",
        questionId: "People Three",
        questions: "05 44 44 44 54",
        options: "01:12 25/08/19",
        ans: "Cleaning"
      }
    ];
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
    this.handleColumnSort = this.handleColumnSort.bind(this);
    this.buttonHeaderStyling = this.buttonHeaderStyling.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
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

  // Method used to filter and sort the list before rerendering it
  applyFilterSort = (questions, activeSort) => {
    // Filter
    questions = questions.filter(
      inputFilter(
        this.state.filter.questionId,
        this.state.filter.questions,
        this.state.filter.options,
        this.state.filter.ans
      )
    );
    // Sort
    let order = activeSort.substr(-3);
    activeSort = activeSort.replace("Sort" + order, "");

    if (order !== "0") {
      if (order === "Asc") {
        questions = questions.sort(propAscSort(activeSort));
      } else if (order === "Dsc") {
        questions = questions.sort(propDescSort(activeSort));
      }
    }
    return questions;
  };

  // Handling events methods
  handleRowDel(question) {
    let index = this.state.questions.indexOf(question);
    let questions = this.state.questions;

    questions.splice(index, 1);
    let shownQuestions = this.applyFilterSort(
      questions,
      this.state.activeSort
    );

    // Delete on API
    let urlDelete = "http://localhost:3001/appointments/" + question._id;

    axios
      .delete(urlDelete, { question })
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
      .post("http://localhost:3001/appointments", {
        questionId: question.questionId,
        questions: question.questions,
        options: question.options,
        ans: question.ans,
        fromReact: true
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

    let shownQuestions = this.applyFilterSort(
      questions,
      this.state.activeSort
    );

    this.setState({
      questions: questions,
      shownQuestions: shownQuestions
    });
  }

  handleRowSave(question) {
    // Update on API
    axios
      .put("http://localhost:3001/questions/" + question._id, {
        questionId: question.questionId,
        questions: question.questions,
        options: question.options,
        ans: question.ans
      })
      .then()
      .catch(err => {
        console.log(err.response);
      });
  }

  handleFilterChange(evt) {
    let filters = this.state.filter;
    filters[evt.target.name] = evt.target.value;

    let shownQuestions = this.state.questions.filter(
      inputFilter(filters.questionId, filters.questions, filters.options, filters.ans)
    );

    // Sort
    let activeSort = this.state.activeSort;

    let order = activeSort.substr(-3);
    activeSort = activeSort.replace("Sort" + order, "");
    if (order !== "0") {
      if (order === "Asc") {
        shownQuestions = shownQuestions.sort(propAscSort(activeSort));
      } else if (order === "Dsc") {
        shownQuestions = shownQuestions.sort(propDescSort(activeSort));
      }
    }

    this.setState({ filter: filters, shownQuestions: shownQuestions });
  }

  handleColumnSort(evt) {
    let buttonName = evt.target.name + "Sort";

    let shownQuestions = this.state.shownQuestions;

    if (this.state.activeSort === buttonName + "Asc") {
      shownQuestions = shownQuestions.sort(propDescSort(evt.target.name));
      this.setState({
        activeSort: buttonName + "Dsc",
        shownQuestions: shownQuestions
      });
    } else {
      shownQuestions = shownQuestions.sort(propAscSort(evt.target.name));
      this.setState({
        activeSort: buttonName + "Asc",
        shownQuestions: shownQuestions
      });
    }
  }

  // Lifecycle Methods
  componentDidMount() {
    // Read All on API
    axios
      .get("http://localhost:3001/appointments")
      .then(res => {
        let shownQuestions = this.applyFilterSort(
          res.data,
          this.state.activeSort
        );
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
        onColumnSort={this.handleColumnSort}
        setButtonHeaderStyle={this.buttonHeaderStyling}
      />
    );
  }
}
