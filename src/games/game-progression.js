import { getRandomInt } from '../utils.js'

const GAME_RULES = 'What number is missing in the progression?'

const MIN_NUM = 1
const MAX_NUM = 100

const MAX_INDEX_NUM = 5
const MAX_START_NUM = 10

const MIN_RANGE_NUM = 6

const generateProgression = () => {
  const start = getRandomInt(MIN_NUM, MAX_START_NUM)
  const step = getRandomInt(MIN_NUM, MAX_NUM)
  const randomNum = getRandomInt(MIN_RANGE_NUM, MAX_START_NUM)
  let progression = []
  for (let i = 0; i < randomNum; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const randomIndex = getRandomInt(MIN_NUM, MAX_INDEX_NUM)
  const progression = generateProgression()

  const correctAnswer = progression[randomIndex]
  progression[randomIndex] = '..'

  let questionArray = []
  for (const num of progression) {
    questionArray.push(String(num))
  }
  const question = questionArray.join(' ')
  return { question, correctAnswer: String(correctAnswer) }
}

export const gameProgression = { GAME_RULES, generateRound }
