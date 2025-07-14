import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Pizza from './../../assets/about/pizza.png';
import Salad from './../../assets/about/salad.png';
import Delivery from './../../assets/about/delivery-bike.png';

const mockData = [
  { image: Pizza, title: "Original" },
  { image: Salad, title: "Quality Foods" },
  { image: Delivery, title: "Fastest Delivery" },
];

function Section2() {
  return (
    <>
     

      <section className='about_wrapper py-5'>
        <Container>
          <Row className='text-center'>
            {mockData.map((item, idx) => (
              <Col xs={12} md={4} key={idx} className='mb-5'>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 90, height: 90 }}
                  className="mb-3"
                />
                <h4 style={{ fontSize: '1.25rem' }}>{item.title}</h4>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
