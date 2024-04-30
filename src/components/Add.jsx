import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [card, setCard] = useState({
    name: '',
    rating: '',
    imageUrl: '',
    price: '',
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  const addHandler = (e) => {
    console.log("button clicked")

    axios
      .post('http://localhost:3001/add', card)
      .then((res) => {
        console.log(res.data)
        alert(res.data)
      })
      .catch((err)=> console.log(err))
      
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Add New Card</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Card Name"
          variant="outlined"
          fullWidth
          onChange={inputHandler}
          value={card.name}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          name="rating"
          label="Rating"
          variant="outlined"
          fullWidth
          onChange={inputHandler}
          value={card.rating}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          name="imageUrl"
          label="Image URL"
          variant="outlined"
          fullWidth
          onChange={inputHandler}
          value={card.imageUrl}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          name="price"
          label="Price"
          variant="outlined"
          fullWidth
          onChange={inputHandler}
          value={card.price}
          style={{ marginBottom: '10px' }}
        />
        <Button variant="contained" color="primary" onClick={addHandler}>
          Add Card
        </Button>
      </form>
    </div>
  );
};

export default Add;
