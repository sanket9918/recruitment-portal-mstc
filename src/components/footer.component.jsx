import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import footimage from '../assets/img/brand/white.svg'
class Footer extends Component {
  render() {
    return (
      <div >
        <footer className=" footer">
          <Container>
            <div style={{ margin: 'auto', textAlign: "center" }}>
              <Row>
              <Col lg="6">
                  <div className=" copyright text-white" style={{fontSize:'1.2rem'}}>
                  Brought to you by  
                  </div><br />
                <a href='https://mstcvit.co.in'>
                <img
                  alt="..."
                  className="img-fluid"
                  src={footimage}
                  style={{ height: "7em", paddingBottom: "1em" }}
                  /></a>
               
              </Col>
                <Col>
                  <span style={{ color: 'white', paddingBottom: '1.5em', fontSize: '1.2rem' }}>Follow us at</span><br />
                  <div style={{marginTop:'1em'}}>
                  <a href='https://www.instagram.com/mstcvit/' style={{margin:'1em'}}>
                    <i className="fa fa-instagram text-white" />
                  </a>
                  <a href='https://www.facebook.com/mstcvit/' style={{ margin: '1em' }}>
                    <i className="fa fa-facebook text-white" />
                  </a>
                  <a href='https://www.linkedin.com/company/micvitvellore' style={{ margin: '1em' }}>
                    <i className="fa fa-linkedin text-white" />
                    </a>
                  </div>
                </Col>
              </Row>
              <hr color='white'/>
              <Col>
                <div className=" copyright text-white">
                  © {new Date().getFullYear()}{" "}
                  Student Technical Community .

                </div>
              
                <div className="copyright text-white">
                  <p>Designed by <a href="https://www.linkedin.com/in/sanket-mohapatra-b10661176/"> Sanket Mohapatra</a></p>
                </div>
              </Col>
            </div>

          </Container>
        </footer>
      </div>
    )
  }
}

export default Footer