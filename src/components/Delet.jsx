// import React, { useState } from 'react';
// import { TextField, Button, Typography } from '@mui/material';
// import axios from 'axios';

// const Delete = () => {
//   const [cardId, setCardId] = useState('');

//   const handleDelete = () => {
//     axios
//       .delete(`http://localhost:3001/delete-card/${cardId}`)
//       .then(() => {
//         console.log("Card deleted successfully");
//       })
//       .catch((err) => {
//         console.error(`Error deleting card: ${err.message}`);
//       });
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Typography variant="h4">Delete Card</Typography>
//       <TextField
//         name="cardId"
//         label="Card ID"
//         variant="outlined"
//         fullWidth
//         onChange={(e) => setCardId(e.target.value)}
//         style={{ marginBottom: '10px' }}
//       />
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={handleDelete}
//       >
//         Delete Card
//       </Button>
//     </div>
//   );
// };

// export default Delete;
