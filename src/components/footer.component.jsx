import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import footimage from '../assets/img/brand/white-horizontal.svg'
class Footer extends Component {
  render() {
    return (
      <div >
        <footer className=" footer">
          <Container>
           
            <center>              
              <Col md="6">
              <img
                alt="..."
                className="img-fluid"
                src={footimage}
                style={{ height: "200px", paddingBottom: "1em" }}
              />
                <div className=" copyright text-white">
                  © {new Date().getFullYear()}{" "}
                  Student Technical Community .


                </div>
                <br/>
                <div className="copyright text-white">
                  <p>Designed by <a href="https://www.linkedin.com/in/sanket-mohapatra-b10661176/"> Sanket Mohapatra</a></p>
                </div>
              </Col>
            </center>
            <Row className=" align-items-center justify-content-md-between">

            </Row>
          </Container>
        </footer>
      </div>
    )
  }
}

export default Footer