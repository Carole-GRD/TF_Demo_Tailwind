import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul>
          <li><a>Accueil</a></li>
          <li><a>Reseaux</a></li>
          <li><a>Contact</a></li>
          <li><a>Liens</a></li>
        </ul>
      </nav>
     <h1 className='text-blue-500'>Hello World</h1>
     <h2>Hello World</h2>
     <button className='btn'>Click Me</button>
     <button className='btn -dark'>Click Me</button>
     <button className='btn -red'>Click Me</button>

     <div className='bg-green-700 sm:bg-violet-500 md:bg-yellow-400'>Mon super texte</div>

      <p className='sm:hidden hover:bg-blue-500'>MODIF</p>
      <p className='dark:bg-sl'>Magnifique</p>

      <div className='h-20 w-screen bg-neutral-200'>
        <div className='h-full w-1/2 bg-slate-500 flex justify-center items-center'>
          <div className='h-1/2 w-1/3 bg-black'></div>
          <div className='h-1/2 w-1/3 bg-white'></div>
        </div>
      </div>

      <div className='bg-primary-900 text-primary-100'>bg-primary-900</div>
      <div className='bg-primary-500'>bg-primary-500</div>
      <div className='bg-primary-100'>bg-primary-100</div>
      <div className='bg-secondary-900 text-secondary-100'>bg-secondary-900</div>
      <div className='bg-secondary-500'>bg-secondary-500</div>
      <div className='bg-secondary-100'>bg-secondary-100</div>
    </>
  )
}

export default App
