import React from 'react';
import { AppBar, Toolbar, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Rating } from '@mui/material';

const Special = () => {
  const promotions = [
    { id: 1, name: 'Special Burger', price: 300, rating: 4.5, image: 'https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600nw-2282033179.jpg' },
    { id: 2, name: 'Deluxe Pizza', price: 700, rating: 4.8, image: 'https://media.istockphoto.com/id/153784617/photo/supreme-pizza-slice-lift.jpg?s=612x612&w=0&k=20&c=Et5uDUJYv3sqDitb1jnUbnGrxhn015foBX_BS-1NFxs=' },
    { id: 3, name: 'Gourmet Pasta', price: 1000, rating: 4.3, image: 'https://www.foodandwine.com/thmb/97PY4E6Wk95IYv1_8pDZvBEi0Uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cream-tomato-rigatoni-FT-RECIPE1020-139fb3fa52574e8bb06f98e7fa3e4f1e.jpg' },
    { id: 4, name: 'Sushi Platter', price: 1500, rating: 4.6, image: 'https://b2847906.smushcdn.com/2847906/wp-content/uploads/2016/07/60-scaled.jpg?lossy=1&strip=1&webp=1' },
    { id: 5, name: 'Spicy Chicken Curry', price: 250, rating: 4.7, image: 'https://static.toiimg.com/thumb/58394256.cms?imgsize=104892&width=800&height=800' },
    { id: 6, name: 'Club Sandwich', price: 799, rating: 4.2, image: 'https://www.foodandwine.com/thmb/tM060YA0Fd0UALCmPQ-5gGWyBqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Club-Sandwich-FT-RECIPE0523-99327c9c87214026b9419b949ee13a9c.jpg' },    
  ];

  return (
    <div style={{ backgroundImage: `url('https://wallpaperset.com/w/full/6/6/5/377775.jpg')`, backgroundSize: 'cover', minHeight: 'calc(100vh - 64px)', position: 'relative', zIndex: 1 }}>
      
      <div><br /><br /><br /><br /><br />
        <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} interval={5000} stopOnHover={false} style={{ maxWidth: '688px', maxHeight: '280px', margin: 'auto' }}>
          {promotions.map((promotion) => (
            <div key={promotion.id}>
              <img src={promotion.image} alt={promotion.name} style={{ width: '688px', height: '280px', objectFit: 'cover' }} />
            </div>
          ))}
        </Carousel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', padding: '40px', zIndex: 1 }}>
          {promotions.map((promotion) => (
            <Card key={promotion.id}>
              <CardContent>
                <img src={promotion.image} alt={promotion.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '16px' }} />
                <Typography variant="h6" component="div">
                  {promotion.name}
                </Typography>
                <Rating name="read-only" value={promotion.rating} readOnly />
                <Typography variant="body2" color="text.secondary">
                  Price: ${promotion.price}
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/payment">
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Special;
