import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards({ image, rating, title, paragraph, price }) {
  return (
   <Col xs={12} sm={6} lg={4} xl={3} className="mb-4">

      <Card className="overflow-hidden">
        <div className="overflow-hidden">
        <Card.Img variant="top" src={image} />
          </div>
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <div className="item_rating">{rating}</div>
              <div className="wishlist">
                <i class="bi bi-heart"></i>
              </div>
            </div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
         {paragraph}
            </Card.Text>

            <div className="d-flex align-items-center justify-content-between">
              <div className="menu_price">
                <h5 className="mb-0">&#8377;{price}</h5>
              </div>
             <div className="add_to_card">
 
</div>

            </div>
           
          </Card.Body>
     
      </Card>
    </Col>
  );
}

export default Cards;
