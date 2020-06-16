import React, { Component } from 'react'
import { Container, Row, Col, Button, FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap'
import footimage from '../assets/img/brand/white.svg'
import { Link } from 'react-router-dom'
class Footer extends Component {
  render() {
    return (
      <div >
        <footer className=" footer">
          <Container>
            <div style={{ margin: 'auto', textAlign: "center" }}>
              <Col lg="12">
                <div className="copyright text-white">
                  <p>Proudly managed and hosted by </p>
                </div>
                <a href='https://mstcvit.co.in'>
                <img
                  alt="..."
                  className="img-fluid"
                  src={footimage}
                  style={{ height: "10em", paddingBottom: "1em" }}
                  /></a>

               
                  <div className=" copyright text-white">
                    © {new Date().getFullYear()}{" "}
                  Student Technical Community .

                </div>
                <br />
                <div className="copyright text-white">
                  <p>Designed by <a href="https://www.linkedin.com/in/sanket-mohapatra-b10661176/"> Sanket Mohapatra</a></p>
                </div>
              </Col>
            </div>
            <Row className=" align-items-center justify-content-md-between">

            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}

export default Footer