import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const ProductCategoriesCard = ({ categories }) => {
  return (
    <Container>
    <Row xs={1} md={2} lg={4} className="d-flex">
      {categories.map(category => (
          <Col key={category.productCategory.productCategoryId} className="mb-4">
            <Card>
                <Image fluid src={category.productCategory.productCategoryImage} alt={category.productCategory.productCategoryName} thumbnail></Image>
              <Card.Body>
                <Card.Title>{category.productCategory.productCategoryName}</Card.Title>
                {/* <Card.Text>
                  <strong>Order Index:</strong> {category.productCategory.orderIndex}
                </Card.Text>
                <Card.Text>
                  <strong>Product ID:</strong> {category.productCategory.productCategoryId}
                </Card.Text>
                <Card.Text>
                  <strong>Wholesale:</strong> {category.productCategory.wholeSale ? 'Yes' : 'No'}
                </Card.Text>
                <Card.Text>
                  <strong>Retail:</strong> {category.productCategory.retail ? 'Yes' : 'No'}
                </Card.Text> */}
                {/* Add more details as needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
    </Container>
  );
};

export default ProductCategoriesCard;
