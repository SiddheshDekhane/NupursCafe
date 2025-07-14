




import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../../Components/Layout/Cards"


import Image1 from '../../assets/menu/tea.jpeg'

import Image2 from '../../assets/menu/leomont.jpeg'

import Image3 from '../../assets/menu/gt.jpeg'

import Image4 from '../../assets/menu/blackcoffee.jpeg'

import Image5 from '../../assets/menu/hotcoffee.jpeg'

import Image6 from '../../assets/menu/coldcoffee.jpeg'

import Image7 from '../../assets/menu/coldcoffeecrush.jpeg'

import Image8 from '../../assets/menu/rosemilkshake.jpeg'



import Image9 from '../../assets/menu/strawberrymilkshake.jpeg'




const drinkData = [
  { id: "d1", image: Image1, title: "Tea", paragraph: "Classic hot tea", price: 10, rating: 4.0 },
  { id: "d2", image: Image2, title: "Lemon Tea", paragraph: "Refreshing lemon tea", price: 20, rating: 4.1 },
  { id: "d3", image: Image3, title: "Green Tea", paragraph: "Healthy green tea", price: 30, rating: 4.3 },
  { id: "d4", image: Image4, title: "Black Coffee", paragraph: "Strong black coffee", price: 20, rating: 4.2 },
  { id: "d5", image: Image5, title: "Hot Coffee", paragraph: "Classic hot coffee", price: 20, rating: 4.0 },
  { id: "d6", image: Image6, title: "Cold Coffee", paragraph: "Chilled cold coffee", price: 50, rating: 4.5 },
  { id: "d7", image: Image7, title: "Cold Coffee with Crush", paragraph: "Cold coffee topped with chocolate crush", price: 70, rating: 4.6 },
  { id: "d8", image: Image8, title: "Rose Milkshake", paragraph: "Chilled rose milkshake", price: 60, rating: 4.4 },
  { id: "d9", image: Image9, title: "Strawberry Milkshake", paragraph: "Sweet strawberry delight", price: 60, rating: 4.4 },
];
function Section4(){
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span:8, offset:2}}>
      <div className="text-center">

  <h2>Lets's Drink</h2>
</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt 
            eaque alias sunt, debitis excepturi fuga, exercitationem obcaecati nostrum,
             nobis voluptatum dolorum dicta fugiat illum quis laborum! Error autem eaque quis.</p>
          
          </Col>
        </Row>
        <Row>{drinkData.map((cardData, index) => (
          <Cards 
          key={index}
          image={cardData.image}
          rating={cardData.rating}
          title={cardData.title}
          paragraph={cardData.paragraph}
          price={cardData.price}
          // renderRatingIcons={renderRatingIcons}          
          
          
          
          
          
          />
        ))}</Row>
      </Container>
    </section>
  )
}


export default Section4;
