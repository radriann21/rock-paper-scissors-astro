export const options = [
  {
    id: 1,
    image: '/images/icon-paper.svg',
    value: 'wrap',
    gradientColors: 'from-primary-paper-start to-primary-paper-end',
    directions: 'top-0 left-0'
  }, 
  {
    id: 2,
    image: '/images/icon-rock.svg',
    value: 'smash',
    gradientColors: 'from-primary-scissors-start to-primary-scissors-end',
    directions: 'top-0 right-0',
  },
  {
    id: 3,
    image: '/images/icon-scissors.svg',
    value: 'cut',
    gradientColors: 'from-primary-rock-start to-primary-rock-end',
    directions: 'bottom-0'
  }
]

export const resultsMap = {
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
}