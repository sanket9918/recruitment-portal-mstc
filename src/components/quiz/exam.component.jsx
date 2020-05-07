import React, { Component } from 'react'
import { QuizData } from './QuizData'
import "../../assets/css/styles.css"
import { Button } from 'reactstrap'
import Navbar1 from '../navbar.component';
import Footer from '../footer.component';
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';

class Exam extends Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
    };

    loadQuiz = () => {
        const { currentQuestion } = this.state;
        this.setState(() => {
            return {
                questions: QuizData[currentQuestion].question,
                options: QuizData[currentQuestion].options,
                answers: QuizData[currentQuestion].answer,
            };
        });
    };
    componentDidMount() {
        this.loadQuiz();
    }

    nextQuestionHandler = () => {
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
    componentDidUpdate(prevProps, prevState) {
        const { currentQuestion } = this.state;
        if (this.state.currentQuestion !== prevState.currentQuestion && this.state.currentQuestion >= 0) {
            if (this.state.currentQuestion < QuizData.length) {
                this.setState(() => {

                    return {
                        questions: QuizData[currentQuestion].question,
                        options: QuizData[currentQuestion].options,
                        answers: QuizData[currentQuestion].answer,
                    }
                });
            }
            else {
                this.setState(() => {

                    return {
                        questions: QuizData[QuizData.length - 1].question,
                        options: QuizData[QuizData.length - 1].options,
                        answers: QuizData[QuizData.length - 1].answer,
                    }

                }

                )

            }

        }


    }

    render() {
        const { questions, options, currentQuestion, userAnswer } = this.state;
        return (
            <div>
                <Navbar1 />
                <section className="section section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                    <Container className="py-md">
                       
                            <div className="timer">
                                <span className="text-white" style={{fontWeight:"bold",fontSize:"1.5rem"}}>Timer: 30:00</span>
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

export default Exam

