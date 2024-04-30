import React from 'react';
import { AppBar, Toolbar, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Promotion = () => {
  const promotions = [
    { id: 1, name: 'Combo Meal', description: 'Get a burger, fries, and a drink for only $10!', image: 'https://media.istockphoto.com/id/520134277/photo/take-out-food-classic-cheeseburger-meal-isolated-on-white.jpg?s=612x612&w=0&k=20&c=-e-sj-hieOBQclUBRu8E7wRfIxqe4mB_CKnkJwyr-es=' },
    { id: 2, name: 'Family Pizza Deal', description: 'Buy one large pizza, get one free!', image: 'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.webp?b=1&s=170667a&w=0&k=20&c=27qSFEznalRWqZ5iAgm4fnM6u_TgIqsgUWb3qLTn-Hk=' },
    { id: 3, name: 'Happy Hour Special', description: '50% off on all appetizers from 5 PM to 7 PM!', image: 'https://thumbs.dreamstime.com/b/happy-hour-specials-stamp-grunge-rubber-white-background-vector-illustration-42128686.jpg' },
    { id: 4, name: 'Dessert Delight', description: 'Free dessert with every main course order!', image: 'https://www.thespruceeats.com/thmb/EOSOLLhLUbRx32leJ8yP2xXRpio=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate-delight-dessert-3053473-hero-01-7b866a29835e41089dd98a7068df6532.jpg' },
  ];

  return (
    <div style={{ backgroundImage: `url('https://wallpaperset.com/w/full/6/6/5/377775.jpg')`, backgroundSize: 'cover', minHeight: 'calc(100vh - 64px)', position: 'relative', zIndex: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}>
        <Toolbar>
          <Button component={Link} to="/order" color="inherit" style={{ border: '1px solid white' }}>Order</Button>&nbsp;
          <Button component={Link} to="/pro" color="inherit" style={{ border: '1px solid white' }}>Promotion</Button>&nbsp;
          <Button component={Link} to="/special" color="inherit" style={{ border: '1px solid white' }}>Special</Button>&nbsp;
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <div>
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
                <Typography variant="body2" color="text.secondary">
                  {promotion.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promotion;
