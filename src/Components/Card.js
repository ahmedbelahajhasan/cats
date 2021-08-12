import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const CatCard = ({cat}) => {
    return (
        
            <Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={cat.image} style={{height:'15rem'}}/>
  <Card.Body>
    <Card.Title>{cat.name}</Card.Title>
    <Card.Text>
      {cat.breed}
    </Card.Text>
    <Button variant="light"><Link to={`/cat/${cat.id}`}>
    details
    </Link></Button>
  </Card.Body>
</Card>
        
    )
}

export default CatCard
