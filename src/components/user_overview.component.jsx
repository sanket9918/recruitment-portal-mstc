import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import { Container,Row,Col,Button} from 'reactstrap'
import { Link} from 'react-router-dom'
class CandProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orgName: 'VIT Music Club',
            orgDesc: '',
            isChecked:false
            // orgImage=''
        }
    }
    fetchDesc = () => {
        this.setState({
            orgDesc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dignissimos nisi doloribus saepe libero reprehenderit, labore temporibus eveniet debitis eum error ipsam. Cum eligendi dolores maiores pariatur iusto ipsam sint?'
        })
    }
    // fetchOrgImage = () => {
    //     return
    // }
    componentDidMount() {
        this.fetchDesc();
    }
    render()
    {
        return (
            <div>
                <Navbar1 />
                    <section className="section section-shaped">
                        <div className="shape shape-style-1 shape-default">
                        </div>
                        <Container className="py-md">
                            <Row className="justify-content-between align-items-center">
                                <Col className="mb-lg-auto" lg="6">
                                <div style={{ margin: "auto", textAlign: "center" }}>
                                <h2 className="display-3 text-white">
                                    Candidate details
                                </h2>
                               
                                <h4 id="Name" className="text-white">Dan Brown</h4>
                                    <h4 id="reg_no" className="text-white">18BCEXXX</h4>
                                    <span>You are currently appearing test for : </span>
                                    <b>{this.state.orgName}</b>
                                        
                                   
                                    <h3 className="text-white" style={{ marginTop: "2em" }}>About Organisation</h3>
                                    <img
                                        alt="..."
                                        className="img-fluid"
                                        style={{ paddingBottom: "1em", height: "10em" }}
                                        src={require("../assets/img/happy.svg")}

                                    /><br />
                                    <span className="text-white">{this.state.orgDesc}</span>
                                    



                                </div>

                                
                            </Col>
                            
                            <Col className="mb-lg-auto"  lg="6">
                                <div style={{ margin: "auto", textAlign: "center" }}>

                                    <h2 className="display-3 text-white">
                                        Exam Instructions
                                </h2>
                                </div>
                                <div style={{ margin: "auto", textAlign: "left",maxHeight:"30em",overflowY:"auto" }}>
                                    <ul>
                                        <li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li>
                                        <li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li><li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li>
                                        <li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li>
                                        <li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li>
                                        <li>
                                            <p className="text-white" >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos magnam reiciendis ipsa labore architecto eveniet. Commodi tempore officiis inventore consequatur, amet nobis eligendi, alias quod assumenda, dolores iusto laborum?
                                         
                                    </p>
                                        </li>
                                    </ul>
                                    

                                </div>
                                <div style={{ margin: "auto", textAlign: "right" }}>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        
                                        <label
                                            className="custom-control-label"
                                            htmlFor="customCheckLogin2"
                                        >
                                            <span className="text-white">I agree to exam rules and conditions.</span>
                                            
                                        </label>
                                        <input
                                            className="custom-control-input"
                                            id="customCheckLogin2"
                                            type="checkbox"
                                        />
                                    </div>
                                    <Link to='/exam'>
                                    <Button
                                        className="my-4"
                                        type="button"
                                    >
                                            Proceed
                                    </Button>
                                    </Link>
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    </section>

                <Footer />

            </div>
            
        )
    }
}

export default CandProfile;
