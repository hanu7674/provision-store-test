import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light" style={{position: 'fixed', bottom: 0, width: "100%" }}>
      <Container>
        <Row>
          <Col>
          <Image style={{filter: `invert(100%)`}}  variant="top" src="../../assets/images/logo.png" width={40} height={40} />
            
                <Link to= '/' className="text-decoration-none text-white-50">
                    Provision Store
                </Link>
          </Col>
          <Col className="text-center">
          <p>
          © 2024, Made with ❤️ by{' '}
          <a href="https://github.com/hanu7674" target="_blank" rel="noreferrer" className="text-decoration-none text-white-50">
            Hanu7674
          </a>
        </p>
          </Col>
          <Col className="text-end">
            <p>Contact: info@provisionstore.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;