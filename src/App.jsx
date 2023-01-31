import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import "./style.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Card
      img="katie-zaferes.png"
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136} ></Card>
  </React.StrictMode>,
)
