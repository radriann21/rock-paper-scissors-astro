const OptionButton = ({ gradientColors, directions, imgSrc, value, handleOption }) => {
  return (
    <button className={`w-[90px] md:w-[120px] h-[90px] md:h-[120px] rounded-full bg-gradient-to-r ${gradientColors} absolute ${directions} p-4 transition-all duration-300 hover:-translate-y-4 hover:shadow-md`} data-value={value} onClick={handleOption}>
      <div className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] bg-white rounded-full flex items-center justify-center">
        <img className="w-[40px] md:w-[50px]" src={imgSrc} alt="paper" />
      </div>
    </button>
  )
}

export default OptionButton