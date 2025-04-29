import readlineSync from 'readline-sync';


const ROUNDS = 3


export const engine = (game) => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name?\n')
    console.log(`Hello, ${name}`)
    console.log(game.GAME_RULES)
    for (let i = 0; i < ROUNDS; i +=1 ){
        const { question, correctAnswer } = game.generateRound();
        console.log(`Question: ${question}`)
        const answer = readlineSync.question('Your answer: ')

        if (correctAnswer !== answer) {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`)
            console.log (`Let's try again, ${name}!`)
            return
        }
        console.log('Correct!')
    }
    console.log(`Congratulations, ${name}!`)
}
