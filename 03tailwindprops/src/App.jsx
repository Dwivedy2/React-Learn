import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card';

function App() {
  const login = {
    username: "Lolo",
    age: 21,
  };
  const contacts = ["lily", "fruity", "jamp"];

  const users = [
    {
      username: "Lupa Chiks",
      btnText: `View Lupa Chiks`,
      description: "I am Lupa, I believe in reality and I think to be in present.",
      profilePic: "https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "Fila Pound",
      btnText: `View Fila Pound`,
      description: "Doing research in human botanity in aerospace.",
      profilePic: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "Gigs Cheremon Fhops",
      btnText: `View Gigs Cheremon Fhops`,
      description: "Lovely girls, but I love skates, passion are skates and wanna let go",
      profilePic: "https://images.unsplash.com/photo-1628015081036-0747ec8f077a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];

  return (
    <>
      <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded">
        ZFriend
      </h1>
      
      <div className='flex flex-wrap justify-between'>
        <Card username="Delba Misty" 
              logDetail={login} 
              contacts={contacts}
              btnText={`View Delba Misty`}
              description="Hi myself Delba, I love cooking and adventure."
              profilePic="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
        <Card username="Nokohara Kamui" 
              logDetail={login} 
              contacts={contacts}
              btnText={`View Nokohara Kamui`}
              description="Hi I am Nokohara from Japan. I am in search of peace."
              profilePic="https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        {
          users.map(({username, btnText, description, profilePic}) => (
          <Card username={username}
                btnText={btnText}
                description={description}
                profilePic={profilePic} />
          ))
        }
      </div>
    </>
  )
}

export default App
