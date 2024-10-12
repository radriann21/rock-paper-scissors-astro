import { useState, useEffect } from "react"
import OptionButton from "./OptionButton"
import Header from "./Header"
import { options } from "../options"
import { OptionsList } from "./OptionList"

const resultsMap = {
  wrap: {
    wrap: 'draw', 
    smash: 'you lose', 
    cut: 'you win', 
  },
  smash: {
    wrap: 'you win', 
    smash: 'draw', 
    cut: 'you lose', 
  },
  cut: {
    wrap: 'you lose', 
    smash: 'you win', 
    cut: 'draw', 
  },
};


const SelectionScreen = ({ playerChoice, computerChoice, result }) => {
  return (
    <section className="w-full h-[320px] flex justify-around px-8">
      <section>
        <h3 className="uppercase text-lg text-white mb-4">You picked</h3>
        <OptionButton 
          gradientColors={playerChoice.gradientColors}
          imgSrc={playerChoice.image}
          value={playerChoice.value}
        />
      </section>

      <section className="w-[20%]">
        {
          result ? (
            <div> 
              <h3 className="text-center uppercase text-5xl font-bold text-white tracking-wider">{result}</h3>
              <button onClick={() => window.location.reload()} className="btn w-full mt-4 bg-white text-rose-500 uppercase transition-all duration-300 hover:bg-slate-200 hover:shadow-lg">
                Play Again
              </button>
            </div>
          ) 
          : null
        }
       
      </section>

      <section>
        <h3 className="uppercase text-lg text-white mb-4 px-auto">The house picked</h3>
        {
          computerChoice
          ? (
            <OptionButton 
              gradientColors={computerChoice.gradientColors}
              imgSrc={computerChoice.image}
              value={computerChoice.value}
            />
          )
          : null
        }
      </section>
    </section>
  )
}

const ListScreen = ({ options, handleOption }) => {
  return (
    <section className="w-full md:w-[60%] lg:w-[30%] h-[320px] bg-triangle bg-no-repeat bg-center p-8 flex items-center justify-center relative">
      <OptionsList options={options} handleOption={handleOption} />
    </section>
  )
}

const Main = () => {

  const [score, setScore] = useState(0)
  const [playerChoice, setPlayerChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState(null)
  
  const handleOption = (option) => {
    setPlayerChoice(option)
  }

  const determineWinner = () => {
    if (!playerChoice || !computerChoice) return null
    return resultsMap[playerChoice.value][computerChoice.value] || null
  }

  const getRamdomOption = () => {
    const randomOption= Math.floor(Math.random() * options.length)
    return options[randomOption]
  }

  useEffect(() => {
    if (playerChoice) {
      const timer = setTimeout(() => {
        setComputerChoice(getRamdomOption())
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [playerChoice])

  useEffect(() => {
    if (computerChoice) {
      setResult(determineWinner())
    }
  }, [computerChoice])

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