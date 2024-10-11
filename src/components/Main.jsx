import OptionButton from "./OptionButton"
import Header from "./Header"

const Main = () => {

  const options = [
    {
      id: 1,
      image: '/images/icon-paper.svg',
      value: 'wrap'
    }, 
    {
      id: 2,
      image: '/images/icon-rock.svg',
      value: 'smash'
    },
    {
      id: 3,
      image: '/images/icon-scissors.svg',
      value: 'cut'
    }
  ]

  return (
    <>
    <Header />
      <section className="w-full md:w-[60%] lg:w-[30%] h-[320px] bg-triangle bg-no-repeat bg-center p-8 flex items-center justify-center relative">
        <OptionButton
          gradientColors='from-primary-paper-start to-primary-paper-end'
          directions='top-0 left-0'
          imgSrc='/images/icon-paper.svg'
        />
        <OptionButton
          gradientColors='from-primary-scissors-start to-primary-scissors-end'
          directions='top-0 right-0'
          imgSrc='/images/icon-scissors.svg'
        />
        <OptionButton
          gradientColors='from-primary-rock-start to-primary-rock-end'
          directions='bottom-0'
          imgSrc='/images/icon-rock.svg'
        />
      </section>
    </>
  )
}

export default Main