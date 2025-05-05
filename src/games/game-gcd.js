import { getRandomInt } from '../utils.js'

const GAME_RULES = 'Find the greatest common divisor of given numbers.'
const MIN_NUM = 1
const MAX_NUM = 100

const getCorrectAnswer = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 = num1 % num2
    }
    else {
      num2 = num2 % num1
    }
  }
  return (num1 + num2)
}

const generateRound = () => {
  const randomNum1 = getRandomInt(MIN_NUM, MAX_NUM)
  const randomNum2 = getRandomInt(MIN_NUM, MAX_NUM)
  const question = `${randomNum1} ${randomNum2}`
  const correctAnswer = getCorrectAnswer(randomNum1, randomNum2)
  return { question, correctAnswer: String(correctAnswer) }
}

export const gameGcd = { GAME_RULES, generateRound }
