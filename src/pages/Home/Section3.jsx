import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../../Components/Layout/Cards"


// Import images
           import Image1 from "../../assets/menu/Vegetable-Sandwich.webp";
            import Image2 from "../../assets/menu/veggrilledsandwich.jpeg"  
import Image3 from "../../assets/menu/vegchesegrilled.jpeg";
import Image4 from "../../assets/menu/Sweet Corn Sandwich.jpeg";
import Image5 from "../../assets/menu/Veg. Fingers.jpeg";
import Image6 from "../../assets/menu/Veg. Nuggets.jpeg";
import Image7 from "../../assets/menu/Classic Veg. Pizza.jpeg";
import Image8 from "../../assets/menu/Classic Veg. Cheese Bust Pizza.avif";
import Image9 from "../../assets/menu/Veg. Cheese Burger.jpeg";
import Image10 from "../../assets/menu/Non Veg. Cheese Burger.jpeg";
import Image11 from "../../assets/menu/Chicken Popcorn.jpeg";
import Image12 from "../../assets/menu/Chicken Fingers.jpeg";
import Image13 from "../../assets/menu/Chicken Nuggets.jpeg";
import Image14 from "../../assets/menu/Salted Fries.jpeg";
import Image15 from "../../assets/menu/periperi.jpeg";
import Image16 from "../../assets/menu/perichese.jpeg";
import Image17 from "../../assets/menu/Plain Maggie.jpeg";
import Image18 from "../../assets/menu/Masala Maggie.jpeg";
import Image19 from "../../assets/menu/chesemag.jpeg";

            
            

// ⭐ Food items with ratings
const mockData = [
  { id: "0001", image: Image1, title: "Plain Sandwich", paragraph: "Toasted sandwich with simple vegetables", price: 50, rating: 4.0 },
  { id: "0002", image: Image2, title: "Veg. Grill Sandwich", paragraph: "Grilled sandwich with assorted veggies", price: 70, rating: 4.1 },
  { id: "0003", image: Image3, title: "Veg. Cheese Grill Sandwich", paragraph: "Grilled sandwich with veggies and cheese", price: 80, rating: 4.3 },
  { id: "0004", image: Image4, title: "Sweet Corn Sandwich", paragraph: "Creamy sweet corn sandwich", price: 80, rating: 4.0 },
  { id: "0005", image: Image5, title: "Veg. Fingers", paragraph: "Crunchy vegetarian fingers", price: 80, rating: 4.2 },
  { id: "0006", image: Image6, title: "Veg. Nuggets", paragraph: "Golden brown vegetarian nuggets", price: 100, rating: 4.3 },
  { id: "0007", image: Image7, title: "Classic Veg. Pizza", paragraph: "Veggie-loaded classic pizza", price: 120, rating: 4.4 },
  { id: "0008", image: Image8, title: "Classic Veg. Cheese Bust Pizza", paragraph: "Cheesy burst pizza with vegetables", price: 120, rating: 4.5 },
  { id: "0009", image: Image9, title: "Veg. Cheese Burger", paragraph: "Burger with vegetable patty and cheese", price: 70, rating: 4.0 },
  { id: "0010", image: Image10, title: "Non Veg. Cheese Burger", paragraph: "Non-veg burger with cheese slice", price: 80, rating: 4.2 },
  { id: "0011", image: Image11, title: "Chicken Popcorn", paragraph: "Crispy chicken popcorn bites", price: 100, rating: 4.2 },
  { id: "0012", image: Image12, title: "Chicken Fingers", paragraph: "Fried chicken finger snacks", price: 100, rating: 4.1 },
  { id: "0013", image: Image13, title: "Chicken Nuggets", paragraph: "Crunchy chicken nuggets", price: 110, rating: 4.2 },
  { id: "0014", image: Image14, title: "Salted Fries", paragraph: "Classic salted fries", price: 70, rating: 3.9 },
  { id: "0015", image: Image15, title: "Peri Peri Fries", paragraph: "Spicy peri peri flavored fries", price: 80, rating: 4.0 },
  { id: "0016", image: Image16, title: "Peri Peri With Cheese Fries", paragraph: "Cheesy peri peri fries combo", price: 90, rating: 4.1 },
  { id: "0017", image: Image17, title: "Plain Maggie", paragraph: "Simple plain Maggie", price: 40, rating: 3.8 },
  { id: "0018", image: Image18, title: "Masala Maggie", paragraph: "Spicy masala Maggie noodles", price: 50, rating: 4.0 },
  { id: "0019", image: Image19, title: "Cheese Maggie", paragraph: "Cheesy flavored Maggie noodles", price: 60, rating: 4.2 },
];

  




function Section3(){
  return (
  <section id="menu" className="menu_section">

      <Container>
        <Row>
          <Col lg={{ span:8, offset:2}}>
         <div className="text-center">
  <h2>MENU</h2>
  <h2>Food to eat</h2>
</div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt 
            eaque alias sunt, debitis excepturi fuga, exercitationem obcaecati nostrum,
             nobis voluptatum dolorum dicta fugiat illum quis laborum! Error autem eaque quis.</p>
          
          </Col>
        </Row>
        <Row>{mockData.map((cardData, index) => (
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


export default Section3;
