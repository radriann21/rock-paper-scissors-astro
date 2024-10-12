import Header from "./Header"
import { useState, useEffect, useCallback } from "react"
import { options, resultsMap } from "../gameData"
import { ListScreen } from "./ListScreen"
import { SelectionScreen } from "./SelectionScreen"

const Main = () => {
  const [score, setScore] = useState(JSON.parse(localStorage.getItem('score')) || 0)
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  
  const handleOption = (option) => {
    setPlayerChoice(option)
  }

  const determineWinner = useCallback(() => {
    if (!playerChoice || !computerChoice) return null
    const outcome = resultsMap[playerChoice.value][computerChoice.value] || null
    if (outcome === 'you win') setScore((prevScore) => prevScore + 1)
    if (outcome === 'you lose') setScore(0)
    return outcome;
  }, [playerChoice, computerChoice])

  const getRandomOption = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }, [])

  useEffect(() => {
    if (playerChoice) {
      const timer = setTimeout(() => {
        setComputerChoice(getRandomOption())
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [playerChoice, getRandomOption])

  useEffect(() => {
    if (computerChoice) {
      setResult(determineWinner())
    }
  }, [computerChoice, determineWinner])

  useEffect(() => {
    localStorage.setItem('score', JSON.stringify(score))
  }, [score])

  return (
    <>
    <Header score={score} />
      {
        playerChoice 
        ? (<SelectionScreen playerChoice={playerChoice} computerChoice={computerChoice} result={result} />) 
        : ( <ListScreen options={options} handleOption={handleOption}/>)
      }
    </>
  )
}

export default Main