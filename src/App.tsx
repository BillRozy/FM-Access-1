import { useState } from 'react'
import './App.css'
import RatingSetState from "./components/RatingSetState.tsx"
import InitialState from "./components/InitialState.tsx"

function App() {
  const [currentRating, setCurrentRating] = useState(-1)
  const isRatingSet = currentRating !== -1
  return (
    <>
      {
        isRatingSet ? <RatingSetState rating={currentRating}></RatingSetState> : <InitialState rating={currentRating} onRatingSelected={setCurrentRating}></InitialState>
      }
    </>
  )
}

export default App
