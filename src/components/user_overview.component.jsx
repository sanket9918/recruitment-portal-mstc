import React, { Component } from 'react'
import Navbar1 from './navbar.component'
import Footer from './footer.component'
import { Container,Row,Col,Button,Form} from 'reactstrap'
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

    onLogout() {
        localStorage.removeItem();
        
    }
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
                                    <Link to='/'>
                                        <Button
                                            className="my-4"
                                            type="button"
                                            onClick={this.onLogout}
                                        >
                                            Log Out
                                </Button>
                                    </Link>
                                        
                                   
                                 
                                </div>

                                
                            </Col>
                            
                            <Col className="mb-lg-auto" lg="6">
                                <div style={{ margin: "auto", textAlign: "center", }}>

                                <h3 className="display-3 text-white" >About Organisation</h3>
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    style={{ paddingBottom: "1em", height: "10em" }}
                                    src={require("../assets/img/happy.svg")}

                                /><br />
                                <span className="text-white">{this.state.orgDesc}</span>
                              </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{ margin: "auto", textAlign: "center", marginTop: "5em"}}>

                                    <h2 className="display-3 text-white">
                                        Exam Instructions
                                </h2>
                                </div>
                                <div style={{ margin: "auto", textAlign: "left",maxHeight:"30em",overflow:"auto" }}>
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
                                <Form role="form">
                                <div style={{ marginTop: "1em", textAlign: "right" }}>
                                    <div className="">
                                            <input
                                                className="mycheckbox"
                                                id="consent"
                                                value='consent'
                                                type="checkbox"
                                                checked={this.state.isChecked}
                                                onChange={() => {
                                                    this.setState({
                                                        isChecked:!this.state.isChecked
                                                    })
                                                }}
                                            />
                                        <label
                                            htmlFor="mycheckbox"
                                        >
                                            <span className="text-white">I agree to exam rules and conditions.</span>
                                            
                                        </label>
                                        
                                    </div>
                                        <Link to='/exam'>
                                            {this.state.isChecked ? <Button
                                                className="my-4"
                                                type="button"
                                            >
                                                Proceed
                                    </Button> :
                                                <Button
                                                    className="my-4"
                                                    type="button"
                                                    disabled
                                                >
                                                    Proceed
                                    </Button>}
                                   
                                    </Link>
                                    
                                    </div>
                                </Form>
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
