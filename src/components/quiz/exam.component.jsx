import React, { Component } from 'react'
import "../../assets/css/styles.css"
import { Button } from 'reactstrap'
import Navbar1 from '../navbar.component';
import Footer from '../footer.component';
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from '../../actions/authActions'
import axios from 'axios'
class Exam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAnswer: null,
            currentQuestion: 0,
            options: [],
            questions: [],
            QuizData: [],
            setAns:''
        };
    }

    buttonReturnValue() {
        console.log(document.getElementById('ans').innerText);
    }
    onLogout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
    }

    sendResult(ans) {
        console.log(ans)
        axios
            .post('/api/post/users/submitTest', {
                "testId": 1004,
                "clubCode": 102,
                "name": "Sanket Mohapatra",
                "regNo": "18BCE0340",
                "clubName": 'mkbhd',
                'ans':[`${ans}`],
                'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTMwZmE1NDZlYjY5Mzc4MjY2MGQ1NyIsIm5hbWUiOiJTYW5rZXQgTW9oYXBhdHJhIiwicmVnTm8iOiIxOEJDRTAzNDAiLCJpYXQiOjE1OTE5Mzg5ODcsImV4cCI6MTU5MTk0OTc4N30.87vR5BuJ2zCmckB9tsCASVF6zaysU1p2Qyszz-LOJu0'
            })
    }

    loadQuiz() {
        axios
            .post('api/post/users/takeTest', {
                "testId": 1004,
                "clubCode": 102,
                "regNo": "18BCE0340",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTMwZmE1NDZlYjY5Mzc4MjY2MGQ1NyIsIm5hbWUiOiJTYW5rZXQgTW9oYXBhdHJhIiwicmVnTm8iOiIxOEJDRTAzNDAiLCJpYXQiOjE1OTE5Mzg5ODcsImV4cCI6MTU5MTk0OTc4N30.87vR5BuJ2zCmckB9tsCASVF6zaysU1p2Qyszz-LOJu0"

            })
            .then(
                res => {
                    // const id  = res.data.questionSet.map((id)=>id.quid)
                    // const question = res.data.questionSet.map((ques) => ques.ques)
                    // const options = res.data.questionSet.map((options) => options.options)
                    this.setState({
                        QuizData: res.data.questionSet
                    });
                    console.log(this.state.QuizData)
                    const { currentQuestion, QuizData } = this.state;
                    console.log(QuizData.length)
                    console.log(QuizData[currentQuestion])
                    this.setState(() => {
                        return {
                            questions: QuizData[currentQuestion].ques,
                            options: QuizData[currentQuestion].options,
                        };
                        // });

                    });

                    // 
                    // 

                })}




        componentDidMount() {

            // console.log(QuizData)
            this.loadQuiz();
        }

    nextQuestionHandler = () => {
        const { QuizData } = this.state;
            this.setState({
                currentQuestion: this.state.currentQuestion + 1,
            }, () => {
                if (this.state.currentQuestion > QuizData.length - 1) {
                    this.setState({
                        currentQuestion: 0
                    })
                }
            });
        };
        prevQuestionHandler = () => {
            this.setState({
                currentQuestion: this.state.currentQuestion - 1,
            }, () => {
                if (this.state.currentQuestion < 0) {
                    this.setState({
                        currentQuestion: 0
                    })
                }
            });

        };
        onLogout() {
            localStorage.removeItem('the token');
        }
    componentDidUpdate(prevProps, prevState) {
        const { QuizData,setAns } = this.state;
        console.log(QuizData.length)
            const { currentQuestion } = this.state;
            if (this.state.currentQuestion !== prevState.currentQuestion && this.state.currentQuestion >= 0) {
                if (this.state.currentQuestion < QuizData.length) {
                    this.setState(() => {

                        return {
                            questions: QuizData[currentQuestion].ques,
                            options: QuizData[currentQuestion].options,
                        }
                    });
                }
                else {
                    this.setState(() => {

                        return {
                            questions: QuizData[QuizData.length - 1].ques,
                            options: QuizData[QuizData.length - 1].options,
                        }

                    }

                    )

                }

            }


        }

        render() {
            const { questions, options, currentQuestion,QuizData,setAns } = this.state;
            return (
                <div>
                    <Navbar1 />
                    <section className="section section-shaped">
                        <div className="shape shape-style-1 shape-default">

                        </div>
                        <Container className="py-md">

                            <div className="content">
                                <span className="my-4 text-white" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Timer: 30:00</span>

                                <Button
                                    className="my-4"
                                    type="button"
                                    onClick={this.onLogout}
                                >
                                    Log Out
                                </Button>

                            </div>
                            <Row className="justify-content-between align-items-center">
                                <Col className="mb-lg-auto" lg="6">
                                    <div style={{ margin: 'auto', textAlign: 'center' }}></div>
                                    <h2 className="display-3 text-white">
                                        Exam Section
                                </h2>
                                    <span style={{ display: 'block', color: "white" }}>
                                    {`Questions ${currentQuestion} out of ${QuizData.length - 1}`}
                                </span>
                                    <span className="text-white" style={{ fontSize: "1.3rem" }}>{questions}</span>

                                </Col>

                                <Col className="mb-lg-auto" lg="6">

                                    <div className="quiz-holder">
                                        {options.map((option) => (
                                            <button
                                                key={option.id}
                                                className="quiz" 
                                                onClick={() => {
                                                    this.setState(
                                                        { setAns: option }, () => {
                                                            this.sendResult(setAns)
                                                            console.log(setAns)
                                                        })
                                                   
                                                }
                                                    }
                                               
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                    <br />
                                    <div style={{ margin: "auto", textAlign: "right" }}>

                                        <Button
                                            className="my-4"
                                            type="button"
                                        

                                            onClick={this.prevQuestionHandler}
                                        >
                                            Prev
                    </Button>
                                        <Button
                                            className="my-4"
                                            type="button"

                                            onClick={this.nextQuestionHandler}
                                        >
                                            Next
                    </Button>
                                        <Link to='/finish'>
                                            <Button
                                                className="my-4"
                                                type="button"

                                                onClick={this.nextQuestionHandler}
                                            >
                                                Finish
                    </Button>
                                        </Link>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </section>






                    <Footer />
                </div>
            );
            //return <div className='App'>{this.state.currentQuestion}</div>;
        }
    }

    Exam.propTypes =
        {
            logout: PropTypes.func.isRequired,
            auth: PropTypes.object.isRequired
        }

    const mapStateToProps = state => ({
        auth: state.auth
    });
    export default connect(
        mapStateToProps, { logout }
    )(Exam)

