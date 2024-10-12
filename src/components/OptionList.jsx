import OptionButton from './OptionButton'

export const OptionsList = ({ options, handleOption }) => {
  return (
    <>
    {
      options.map((option) => (
        <OptionButton
          key={option.id}
          gradientColors={option.gradientColors}
          directions={option.directions}
          imgSrc={option.image}
          value={option.value}
          handleOption={() => handleOption(option)}
        />
      ))
    }
    </>
  )
}