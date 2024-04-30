import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Rating } from '@mui/material';
import axios from 'axios';

const Special = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios.get('http://localhost:3001/add')
      .then((res) => res.json())
      .then((data) => setPromotions(data))
      .catch((error) => console.error('Error fetching promotions:', error));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('https://wallpaperset.com/w/full/6/6/5/377775.jpg')`,
        backgroundSize: 'cover',
        minHeight: 'calc(100vh - 64px)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <br /><br /><br /><br /><br />
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={false}
        style={{ maxWidth: '688px', maxHeight: '280px', margin: 'auto' }}
      >
        {promotions.map((promotion) => (
          <div key={promotion.id}>
            <img
              src={promotion.image}
              alt={promotion.name}
              style={{ width: '688px', height: '280px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Carousel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', padding: '40px', zIndex: 1 }}>
        {promotions.map((promotion) => (
          <Card key={promotion.id}>
            <CardContent>
              <img
                src={promotion.image}
                alt={promotion.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '16px' }}
              />
              <Typography variant="h6" component="div">
                {promotion.name}
              </Typography>
              <Rating name="read-only" value={promotion.rating} readOnly />
              <Typography variant="body2" color="text.secondary">
                Price: ${promotion.price}
              </Typography>
              <Button variant="contained" color="primary" component={Link} to="/login">
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Special;
