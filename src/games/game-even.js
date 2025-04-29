import { getRandomInt } from "../utils.js";


const GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const MIN_NUM = 1;
const MAX_NUM = 100;


const isEven = (num) => num % 2 === 0;


const generateRound = () => {
    const question = getRandomInt(MIN_NUM, MAX_NUM)
    const correctAnswer = isEven(question) ? 'yes' : 'no'
    return { question, correctAnswer }
}


export const gameEven = {
    GAME_RULES,
    generateRound,
  };