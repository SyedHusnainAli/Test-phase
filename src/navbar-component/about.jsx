import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/about_style.css';
import PartsObj from "../navbar-component/about_part";


export default function MediaCard() {
  

  const cards =[
    {
    title: 'HTML5 & CSS3',
    image : "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: 'This tutorial is designed for people who prefer to learn by doing. If you prefer learning concepts from the ground up, check out our step-by-step guide. You might find this tutorial and the guide complementary to each other.'
  },
  {
    title: 'Bootstrap',
    image : "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: 'This tutorial is designed for people who prefer to learn by doing. If you prefer learning concepts from the ground up, check out our step-by-step guide. You might find this tutorial and the guide complementary to each other.'
//    description: 'Lizards are a widespread group ospecies, ranging across all continents except Antarctica'
  },
  {
    title: 'Javascript & React',
    image : "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: 'This tutorial is designed for people who prefer to learn by doing. If you prefer learning concepts from the ground up, check out our step-by-step guide. You might find this tutorial and the guide complementary to each other.'
  },
]
  return (
 

    <div className='about_container'>

<PartsObj />

    {cards.map(function(card){
      return (
           <Card sx={{ maxWidth: 345, }}>
      <CardMedia
        component="img"
        height="140"
         image={card.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {card.title}
      
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      )      
    })}

    </div>
  );
}
