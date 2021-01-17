import React, { Component } from 'react'
import "../../assets/css/styles.css"
import { Button } from 'reactstrap'
import Navbar1 from '../navbar.component';
import Footer from '../footer.component';
import { Container, Row, Col } from 'reactstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from '../../actions/authActions'
import axios from 'axios'
import _ from 'lodash'
import { backURL } from '../../utils/integration'
class Exam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAnswer: null,
            currentQuestion: 0,
            options: [],
            questions: [],
            QuizData: [],
            setAns: [],
            selectedAns: [],
            ansSaved: false,
            error: '',
            loading: false,
            nextDisable: false
        };
    }

    onLogout = e => {
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/')
    }

    sendResult() {
        const { user } = this.props.auth;
        const { setAns } = this.state

        axios
            .post(`${backURL}/api/post/users/submitTest`,{
                "testId": `${user.testId}`,
                "clubCode": `${user.clubCode}`,
                "name": `${user.name}`,
                "regNo": `${user.regNo}`,
                'ans': [`${setAns}`],
                'token': `${localStorage.getItem('jwtToken').split(" ")[1]}`
            })

    }

    loadQuiz() {
        const { user } = this.props.auth;

        axios
            .post(`${backURL}/api/post/users/takeTest`, {
                "testId": `${user.testId}`,
                "clubCode": `${user.clubCode}`,
                "regNo": `${user.regNo}`,
                "token": `${localStorage.getItem('jwtToken').split(" ")[1]}`

            })
            .then(
                res => {

                    if (res.data.error === 1) {
                        this.props.history.push('/error-disable')
                    } else if (res.data.error === 2) {
                        this.props.history.push('/error-test')
                    } 
                    this.setState({
                        QuizData: res.data.questionSet
                    });
                    const { currentQuestion, QuizData } = this.state;
                    this.setState(() => {
                        return {
                            quid: QuizData[currentQuestion].quid,
                            questions: QuizData[currentQuestion].ques,
                            options: QuizData[currentQuestion].options,
                        };

                    });

                }).catch((err) => {
                    this.props.history.push('/error1')
                })
    }
    saveAnswers() {
        const { selectedAns } = this.state
        this.setState({
            setAns: _.uniqBy(selectedAns, '_id')
        })
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        })

        this.loadQuiz();
    }
    nextQuestionHandler = () => {
        const { QuizData } = this.state;
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
        }, () => {
            if (this.state.currentQuestion === QuizData.length - 1) {
                this.setState({
                    nextDisable: true
                })
            }
            if (this.state.currentQuestion > QuizData.length - 1) {
                this.setState({
                    currentQuestion: QuizData.length - 1,

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
        const { QuizData } = this.state;
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
                })
            }
        }
    }
    
    render() {
        const { questions, options, currentQuestion, QuizData, selectedAns, setAns, ansSaved, loading, nextDisable } = this.state;

        return (
            <div classname="Exam-container" style={{ userSelect: 'none', MozUserSelect: 'none', WebkitUserSelect: 'none', msUserSelect: 'none', WebkitTouchCallout: 'none' }}>
                <Navbar1 />
                <section className="section section-shaped">
                    <div className="shape shape-style-1 shape-default">

                    </div>
                    <Container className="py-md">

                        <div className="content">
                            <span className="my-4 text-white" style={{ fontWeight: "bold", fontSize: "1.5rem" }}></span>

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
                                    {`Questions ${currentQuestion + 1} out of ${QuizData.length}`}
                                </span>
                                <span className="text-white" style={{ fontSize: "1.3rem" }}>{questions}</span>
                                <br />  <br /> <br /> <br />
                                {/* <span className="text-white" style={{ fontSize: "1.3rem" }}>Last saved ans - </span> */}

                            </Col>

                            <Col className="mb-lg-auto" lg="6">

                                <div className="quiz-holder">
                                    {options.map((option) => (
                                        <button
                                            key={option.id}
                                            className="quiz"
                                            onClick={() => {
                                                this.setState(prevState =>
                                                    ({
                                                        selectedAns: [{ "_id": `${QuizData[currentQuestion].quid}`, "ans": option }, ...prevState.selectedAns],
                                                        ansSaved: false
                                                    })

                                                );

                                            }

                                            }
                                        // onClick={() => {
                                        //     this.setState(prevState =>
                                        //         ({ setAns: [{ "_id": `${QuizData[currentQuestion].quid}`, "ans": option },...prevState.setAns ] }),


                                        //     )

                                        // }


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

                                        onClick={this.nextQuestionHandler}
                                        disabled={nextDisable}
                                    >
                                        Next
                    </Button>
                                    {ansSaved ? <Button
                                        className="my-4"
                                        style={{
                                            backgroundColor: "#b2102f",
                                            color: "white",

                                        }}
                                        type="button"

                                        onClick={
                                            () => {
                                                this.setState({
                                                    loading: true
                                                })
                                                const { user } = this.props.auth;
                                                axios
                                                    .post(`${backURL}/api/post/users/submitTest`, {
                                                        "testId": `${user.testId}`,
                                                        "clubCode": `${user.clubCode}`,
                                                        "name": `${user.name}`,
                                                        "email": `${user.email}`,
                                                        "mobileNo": `${user.mobileNo}`,
                                                        "regNo": `${user.regNo}`,
                                                        'ans': setAns,
                                                        'token': `${localStorage.getItem('jwtToken').split(" ")[1]}`
                                                    }).then((res) => {
                                                        if (res.data.error === 1) {
                                                            this.props.history.push('/error-disable')
                                                        } else if (res.data.error === 0)
                                                        this.props.history.push('/finish')

                                                    }).catch((err) => {
                                                        console.log(err)
                                                    })

                                            }
                                                                                    }

                                    >
                                        {loading && (
                                            <i
                                                className="fa fa-refresh fa-spin"
                                                style={{ marginRight: "5px" }}
                                            />
                                        )}
                                        {loading && <span>Finish</span>}
                                        {!loading && <span>Finish</span>}
                                    </Button> : <Button
                                        className="my-4"

                                        type="button"

                                        onClick={() => {
                                            this.setState({
                                                setAns: _.uniqBy(selectedAns, '_id'),
                                                ansSaved: true
                                            })
                                        }}
                                    >
                                            Save Answers
                    </Button>}
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </section>
                <Footer />
            </div>
        );
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

