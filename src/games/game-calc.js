import { getRandomInt } from "../utils.js"

const GAME_RULES = "What is the result of the expression?"
const OPERATORS = ['+', '-', '*']
const MIN_NUM = 1
const MAX_NUM = 100


const getCorrectAnswer = (operator, num1, num2) => {
    switch(operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        default:
            throw new Error('Unknown operator');
    }
}


const generateRound = () => {
    const randomNum1 = getRandomInt(MIN_NUM, MAX_NUM)
    const randomNum2 = getRandomInt(MIN_NUM, MAX_NUM)
    const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)]
    const question = `${randomNum1} ${operator} ${randomNum2}`
    const correctAnswer = getCorrectAnswer(operator, randomNum1, randomNum2)
    return {question, correctAnswer: String(correctAnswer)}
}

export const gameCalc = { GAME_RULES, generateRound };