import { getRandomInt } from '../utils.js'

const GAME_RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const MIN_NUM = 1
const MAX_NUM = 3000

const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const generateRound = () => {
  const question = getRandomInt(MIN_NUM, MAX_NUM)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return { question, correctAnswer: String(correctAnswer) }
}

export const gamePrime = { GAME_RULES, generateRound }
