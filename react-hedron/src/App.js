import React, { useState } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddItem from './AddItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';


function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([item, ...items]);
  }

  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">
            Shopping List
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack alignItems="center">
        <AddItem addItem={addItem}></AddItem>
        <List>
        {
          items.map((item, index) => 
            <ListItem key={index} divider>
              <ListItemText primary={item.product} secondary={item.amount}/>
            </ListItem>
          )
        }
        </List>
      </Stack>
    </Container>
  );
}

export default App;
