import { useState } from 'react'
import './App.css'
import CatHeader from './components/CatHeader'
import CatFacts from './components/CatFacts'

function App() {


  return (
    <>
     <div className="max-w-md mx-auto my-8">
        <CatHeader />
        <CatFacts />
      </div>
    </>
  )
}

export default App
