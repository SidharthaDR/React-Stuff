import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  let myObj = {
    userName:"sampleName",
    userGender:"sampleGender"
  }
  
  let myArr = [1,2,3,4]

  return (
    <>
    <Card 
    profilePic = "https://images.pexels.com/photos/29310356/pexels-photo-29310356/free-photo-of-fashionable-young-woman-in-denim-jacket-and-boots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    name = "Zira" 
    xy = "USA"
    msg="simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    />

    <br/>
    <Card 
    profilePic ="https://images.pexels.com/photos/29589335/pexels-photo-29589335/free-photo-of-woman-enjoying-a-day-in-central-london.jpeg?" 
    name = "Chi Lao"  
    xy = "China"
    msg = "“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”"
    />
    
    <br/>
    <Card/>
    </>
  )
}

export default App
