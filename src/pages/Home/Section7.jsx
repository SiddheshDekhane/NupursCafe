import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
  <section id="contact" className="contact_section">

      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
           <h4>Nupur's Cafe</h4>
<h2>We Accept Orders!</h2>
<p>
  Nupur's Cafe is open! Enjoy fresh sandwiches, shakes, and more — dine-in or takeaway.
</p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;