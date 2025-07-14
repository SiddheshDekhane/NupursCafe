import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import nupurscafelogo from "../../assets/nupurscafelogo.png"
import { Link } from "react-router-dom";



const Section1 = () => {
  return (
   <section id="home" className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={nupurscafelogo} className="img-fluid" alt="Hero" />
              
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">NUPUR'S CAFE</h1>
              <h2 className="text-white">Where every flavour tells story</h2>
              <p className="text-white pt-2 pb-4">
                Feugiat primis ligula risus auctor laoreet augue egestas mauris
                viverra tortor in iaculis pretium at magna mauris ipsum primis
                rhoncus feugiat
              </p>
            
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;