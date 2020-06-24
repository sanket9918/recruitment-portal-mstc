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
            selectedAns:[],
            error:''
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

    sendResult() {
        const { user } = this.props.auth;
        const { setAns } = this.state
        console.log(user.regNo)
        console.log(setAns)
        axios
            .post('/api/post/users/submitTest', {
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
            .post('api/post/users/takeTest', {
                "testId": `${user.testId}`,
                "clubCode": `${user.clubCode}`,
                "regNo": `${user.regNo}`,
                "token": `${localStorage.getItem('jwtToken').split(" ")[1]}`

            })
            .then(
                res => {
                    this.setState({
                        QuizData: res.data.questionSet
                    });
                    const { currentQuestion, QuizData } = this.state;                  
                    this.setState(() => {
                        return {
                            quid:QuizData[currentQuestion].quid,
                            questions: QuizData[currentQuestion].ques,
                            options: QuizData[currentQuestion].options,
                        };
                        // });

                    });

                    // 
                    // 

                }).catch((err) => {
                    this.props.history.push('/finish')
                })
                    
                

                
    }
    saveAnswers() {
        const { selectedAns } = this.state
        this.setState({
            setAns: _.uniqBy(selectedAns, '_id')
        })
    }



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
        const { QuizData} = this.state;
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
        const { questions, options, currentQuestion, QuizData,selectedAns,setAns } = this.state;
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
                                <br />  <br /> <br /> <br />

                                </Col>

                                <Col className="mb-lg-auto" lg="6">

                                    <div className="quiz-holder">
                                        {options.map((option) => (
                                            <button
                                                key={option.id}
                                                className="quiz"
                                                onClick={() => {
                                                    this.setState(prevState =>
                                                        ({ selectedAns: [{ "_id": `${QuizData[currentQuestion].quid}`, "ans": option }, ...prevState.selectedAns] }),
                                                        
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
                                    <Button
                                        className="my-4"
                                        type="button"

                                        onClick={() => {
                                            this.setState({
                                                setAns: _.uniqBy(selectedAns, '_id')
                                            })
                                        }}
                                    >
                                        Save Answers
                    </Button>
                                    
                                   
                                        <Button
                                            className="my-4"
                                            type="button"

                                            onClick={
                                                () => {
                                                    console.log(selectedAns)
                                                    const { user } = this.props.auth;
                                                    // finalAns=_.uniqBy(selectedAns,'id')
                                                    
                                                      
                                                            axios
                                                                .post('/api/post/users/submitTest', {
                                                                    "testId": `${user.testId}`,
                                                                    "clubCode": `${user.clubCode}`,
                                                                    "name": `${user.name}`,
                                                                    "email": `${user.email}`,
                                                                    "mobileNo": `${user.mobileNo}`,
                                                                    "regNo": `${user.regNo}`,
                                                                    'ans': setAns,
                                                                    'token': `${localStorage.getItem('jwtToken').split(" ")[1]}`
                                                                }).then(() => {
                                                                    // this.props.history.push('/finish')
                                                                    console.log(setAns)

                                                                }).catch((err) => {
                                                                    console.log(err)
                                                                })
                                                        
                                                    }
                                                    
                                                   
                                                    // const ansSample = {
                                                    //     "_id": "1",
                                                    //     "ans":"STC"
                                                    // }
                                                   
                                                }
                                            
                                        >
                                            Finish
                    </Button>
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

