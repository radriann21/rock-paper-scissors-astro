import OptionButton from "./OptionButton"

export const SelectionScreen = ({ playerChoice, computerChoice, result }) => {
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